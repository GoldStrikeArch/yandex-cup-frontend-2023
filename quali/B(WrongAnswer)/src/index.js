@ColorPlayer("48% 0.27 274 / 1", (color) => console.log(color))
class Piano {
  @Color("L", "10%")
  playA(octave) {
    console.log("octave is " + octave);
  }

  @Color("C", "0.15")
  playB(octave) {
    console.log("octave is" + octave);
  }

  @Color("H", "0.1")
  playC(octave) {
    console.log("octave is " + octave);
  }

  @Color("L", "10%")
  playD(octave) {}

  @Color("C", "0.15")
  playE(octave) {}

  @Color("H", "50")
  playF(octave) {}

  @Color("a", "0.4")
  playG(octave) {}
}

export function ColorPlayer(initialColor, cb) {
  const modifyColor = (color, change, isInitial) => {
    if (isInitial) {
      const colors = color
        .split(" ")
        .filter((s) => s !== "/")
        .map((s) => parseFloat(s, 10).toFixed(2));

      return {
        L: colors[0],
        C: colors[1],
        H: colors[2],
        a: colors[3],
      };
    }

    const { name, coeff, octave } = change;

    const calculate = (name) => {
      const change = (Number(octave) - 3) * parseFloat(coeff);

      // console.log(coeff)

      return Number(parseFloat(name) + change).toFixed(2);
    };

    const result = calculate(color[name]);

    switch (name) {
      case "L":
        if (result <= 0) return { ...color, L: 0 };
        if (result >= 100) return { ...color, L: 100.0 };

        return {
          ...color,
          L: result,
        };
      case "C":
        if (result <= 0) return { ...color, C: 0 };
        if (result >= 0.37) return { ...color, C: 0.37 };

        return {
          ...color,
          C: result,
        };
      case "H":
        if (result <= 0) return { ...color, H: 0 };
        if (result >= 360) return { ...color, H: 360.0 };

        return {
          ...color,
          H: result,
        };
      case "a":
        if (result <= 0) return { ...color, a: 0 };
        if (result >= 1) return { ...color, H: 1.0 };

        return {
          ...color,
          a: result,
        };
      default:
        throw new Error("Unexpected value " + name);
    }
  };

  const formatColor = (color) =>
    `${color.L}% ${color.C} ${color.H} / ${color.a}`;

  return function (value, { kind, name }) {
    if (kind === "class") {
      return class extends value {
        constructor(...args) {
          super(...args);
          this.color = modifyColor(initialColor, false, true);
          this.modifyColor = modifyColor;
          this.formatColor = formatColor;
          this.runAfterColorChange = cb;

          cb(formatColor(this.color));
        }
      };
    }
  };
}

export function Color(component, coeff) {
  return function (value, { kind, name }) {
    if (kind === "method") {
      return function (...args) {
        try {
          // const result = value.apply(this, args);
          this.color = this.modifyColor(this.color, {
            name: component,
            coeff,
            octave: args[0],
          });

          this.runAfterColorChange(this.formatColor(this.color));
          // return result;
        } catch (e) {
          console.log("error", e);
          throw e;
        }
      };
    }
  };
}

const piano = new Piano(); // console.log("48.00% 0.27 274.00 / 1.00")
piano.playA(2); // console.log("38.00% 0.27 274.00 / 1.00")
piano.playA(4); // console.log("48.00% 0.27 274.00 / 1.00")
piano.playB(3); // console.log("48.00% 0.27 274.00 / 1.00")
// piano.playC(4); // console.log("48.00% 0.27 274.00 / 1.00")
// piano.playG(2); // console.log("48.00% 0.27 274.00 / 1.00")

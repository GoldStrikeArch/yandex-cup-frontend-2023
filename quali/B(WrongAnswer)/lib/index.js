"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = Color;
exports.ColorPlayer = ColorPlayer;
var _initClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _initProto, _class;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function applyDecs2203RFactory() { function createAddInitializerMethod(e, t) { return function (r) { !function (e, t) { if (e.v) throw new Error("attempted to call " + t + " after decoration was finished"); }(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r); }; } function memberDec(e, t, r, n, a, i, s, o) { var c; switch (a) { case 1: c = "accessor"; break; case 2: c = "method"; break; case 3: c = "getter"; break; case 4: c = "setter"; break; default: c = "field"; } var l, u, f = { kind: c, name: s ? "#" + t : t, "static": i, "private": s }, p = { v: !1 }; 0 !== a && (f.addInitializer = createAddInitializerMethod(n, p)), 0 === a ? s ? (l = r.get, u = r.set) : (l = function l() { return this[t]; }, u = function u(e) { this[t] = e; }) : 2 === a ? l = function l() { return r.value; } : (1 !== a && 3 !== a || (l = function l() { return r.get.call(this); }), 1 !== a && 4 !== a || (u = function u(e) { r.set.call(this, e); })), f.access = l && u ? { get: l, set: u } : l ? { get: l } : { set: u }; try { return e(o, f); } finally { p.v = !0; } } function assertCallable(e, t) { if ("function" != typeof e) throw new TypeError(t + " must be a function"); } function assertValidReturnValue(e, t) { var r = _typeof(t); if (1 === e) { if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0"); void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init"); } else if ("function" !== r) { var n; throw n = 0 === e ? "field" : 10 === e ? "class" : "method", new TypeError(n + " decorators must return a function or void 0"); } } function applyMemberDec(e, t, r, n, a, i, s, o) { var c, l, u, f, p, d, h = r[0]; if (s ? c = 0 === a || 1 === a ? { get: r[3], set: r[4] } : 3 === a ? { get: r[3] } : 4 === a ? { set: r[3] } : { value: r[3] } : 0 !== a && (c = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? u = { get: c.get, set: c.set } : 2 === a ? u = c.value : 3 === a ? u = c.get : 4 === a && (u = c.set), "function" == typeof h) void 0 !== (f = memberDec(h, n, c, o, a, i, s, u)) && (assertValidReturnValue(a, f), 0 === a ? l = f : 1 === a ? (l = f.init, p = f.get || u.get, d = f.set || u.set, u = { get: p, set: d }) : u = f);else for (var v = h.length - 1; v >= 0; v--) { var g; if (void 0 !== (f = memberDec(h[v], n, c, o, a, i, s, u))) assertValidReturnValue(a, f), 0 === a ? g = f : 1 === a ? (g = f.init, p = f.get || u.get, d = f.set || u.set, u = { get: p, set: d }) : u = f, void 0 !== g && (void 0 === l ? l = g : "function" == typeof l ? l = [l, g] : l.push(g)); } if (0 === a || 1 === a) { if (void 0 === l) l = function l(e, t) { return t; };else if ("function" != typeof l) { var y = l; l = function l(e, t) { for (var r = t, n = 0; n < y.length; n++) r = y[n].call(e, r); return r; }; } else { var m = l; l = function l(e, t) { return m.call(e, t); }; } e.push(l); } 0 !== a && (1 === a ? (c.get = u.get, c.set = u.set) : 2 === a ? c.value = u : 3 === a ? c.get = u : 4 === a && (c.set = u), s ? 1 === a ? (e.push(function (e, t) { return u.get.call(e, t); }), e.push(function (e, t) { return u.set.call(e, t); })) : 2 === a ? e.push(u) : e.push(function (e, t) { return u.call(e, t); }) : Object.defineProperty(t, n, c)); } function applyMemberDecs(e, t) { for (var r, n, a = [], i = new Map(), s = new Map(), o = 0; o < t.length; o++) { var c = t[o]; if (Array.isArray(c)) { var l, u, f = c[1], p = c[2], d = c.length > 3, h = f >= 5; if (h ? (l = e, 0 !== (f -= 5) && (u = n = n || [])) : (l = e.prototype, 0 !== f && (u = r = r || [])), 0 !== f && !d) { var v = h ? s : i, g = v.get(p) || 0; if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p); !g && f > 2 ? v.set(p, f) : v.set(p, !0); } applyMemberDec(a, l, c, p, f, h, d, u); } } return pushInitializers(a, r), pushInitializers(a, n), a; } function pushInitializers(e, t) { t && e.push(function (e) { for (var r = 0; r < t.length; r++) t[r].call(e); return e; }); } return function (e, t, r) { return { e: applyMemberDecs(e, t), get c() { return function (e, t) { if (t.length > 0) { for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) { var s = { v: !1 }; try { var o = t[i](n, { kind: "class", name: a, addInitializer: createAddInitializerMethod(r, s) }); } finally { s.v = !0; } void 0 !== o && (assertValidReturnValue(10, o), n = o); } return [n, function () { for (var e = 0; e < r.length; e++) r[e].call(n); }]; } }(e, r); } }; }; }
function _applyDecs2203R(e, t, r) { return (_applyDecs2203R = applyDecs2203RFactory())(e, t, r); }
var _Piano;
_dec = ColorPlayer("48% 0.27 274 / 1", function (color) {
  return console.log(color);
});
_dec2 = Color("L", "10%");
_dec3 = Color("C", "0.15");
_dec4 = Color("H", "0.1");
_dec5 = Color("L", "10%");
_dec6 = Color("C", "0.15");
_dec7 = Color("H", "50");
_dec8 = Color("a", "0.4");
var Piano = /*#__PURE__*/function () {
  function Piano() {
    _classCallCheck(this, Piano);
    _initProto(this);
  }
  _createClass(Piano, [{
    key: "playA",
    value: function playA(octave) {
      console.log("octave is " + octave);
    }
  }, {
    key: "playB",
    value: function playB(octave) {
      console.log("octave is" + octave);
    }
  }, {
    key: "playC",
    value: function playC(octave) {
      console.log("octave is " + octave);
    }
  }, {
    key: "playD",
    value: function playD(octave) {}
  }, {
    key: "playE",
    value: function playE(octave) {}
  }, {
    key: "playF",
    value: function playF(octave) {}
  }, {
    key: "playG",
    value: function playG(octave) {}
  }]);
  return Piano;
}();
_class = Piano;
var _applyDecs2203R2 = _applyDecs2203R(_class, [[_dec2, 2, "playA"], [_dec3, 2, "playB"], [_dec4, 2, "playC"], [_dec5, 2, "playD"], [_dec6, 2, "playE"], [_dec7, 2, "playF"], [_dec8, 2, "playG"]], [_dec]);
var _applyDecs2203R2$e = _slicedToArray(_applyDecs2203R2.e, 1);
_initProto = _applyDecs2203R2$e[0];
var _applyDecs2203R2$c = _slicedToArray(_applyDecs2203R2.c, 2);
_Piano = _applyDecs2203R2$c[0];
_initClass = _applyDecs2203R2$c[1];
_initClass();
function ColorPlayer(initialColor, cb) {
  var modifyColor = function modifyColor(color, change, isInitial) {
    if (isInitial) {
      var colors = color.split(" ").filter(function (s) {
        return s !== "/";
      }).map(function (s) {
        return parseFloat(s, 10).toFixed(2);
      });
      return {
        L: colors[0],
        C: colors[1],
        H: colors[2],
        a: colors[3]
      };
    }
    var name = change.name,
      coeff = change.coeff,
      octave = change.octave;
    var calculate = function calculate(name) {
      var change = (Number(octave) - 3) * parseFloat(coeff);

      // console.log(coeff)

      return Number(parseFloat(name) + change).toFixed(2);
    };
    var result = calculate(color[name]);
    switch (name) {
      case "L":
        if (result <= 0) return _objectSpread(_objectSpread({}, color), {}, {
          L: 0
        });
        if (result >= 100) return _objectSpread(_objectSpread({}, color), {}, {
          L: 100.00
        });
        return _objectSpread(_objectSpread({}, color), {}, {
          L: result
        });
      case "C":
        if (result <= 0) return _objectSpread(_objectSpread({}, color), {}, {
          C: 0
        });
        if (result >= 0.37) return _objectSpread(_objectSpread({}, color), {}, {
          C: 0.37
        });
        return _objectSpread(_objectSpread({}, color), {}, {
          C: result
        });
      case "H":
        if (result <= 0) return _objectSpread(_objectSpread({}, color), {}, {
          H: 0
        });
        if (result >= 360) return _objectSpread(_objectSpread({}, color), {}, {
          H: 360.00
        });
        return _objectSpread(_objectSpread({}, color), {}, {
          H: result
        });
      case "a":
        if (result <= 0) return _objectSpread(_objectSpread({}, color), {}, {
          a: 0
        });
        if (result >= 1) return _objectSpread(_objectSpread({}, color), {}, {
          H: 1.00
        });
        return _objectSpread(_objectSpread({}, color), {}, {
          a: result
        });
      default:
        throw new Error("Unexpected value " + name);
    }
  };
  var formatColor = function formatColor(color) {
    return "".concat(color.L, "% ").concat(color.C, " ").concat(color.H, " / ").concat(color.a);
  };
  return function (value, _ref) {
    var kind = _ref.kind,
      name = _ref.name;
    if (kind === "class") {
      return /*#__PURE__*/function (_value) {
        _inherits(_class2, _value);
        var _super = _createSuper(_class2);
        function _class2() {
          var _this;
          _classCallCheck(this, _class2);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _this.color = modifyColor(initialColor, false, true);
          _this.modifyColor = modifyColor;
          _this.formatColor = formatColor;
          _this.runAfterColorChange = cb;
          cb(formatColor(_this.color));
          return _this;
        }
        return _createClass(_class2);
      }(value);
    }
  };
}
function Color(component, coeff) {
  return function (value, _ref2) {
    var kind = _ref2.kind,
      name = _ref2.name;
    if (kind === "method") {
      return function () {
        try {
          // const result = value.apply(this, args);
          this.color = this.modifyColor(this.color, {
            name: component,
            coeff: coeff,
            octave: arguments.length <= 0 ? undefined : arguments[0]
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
var piano = new _Piano(); // console.log("48.00% 0.27 274.00 / 1.00")
piano.playA(2); // console.log("38.00% 0.27 274.00 / 1.00")
piano.playA(4); // console.log("48.00% 0.27 274.00 / 1.00")
piano.playB(3); // console.log("48.00% 0.27 274.00 / 1.00")
// piano.playC(4); // console.log("48.00% 0.27 274.00 / 1.00")
// piano.playG(2); // console.log("48.00% 0.27 274.00 / 1.00")
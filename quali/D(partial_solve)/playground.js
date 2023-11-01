// -------- INITIAL 

// // helpers

// const lightSwitch = function () { /* Your code here */ };
// const getter = function (key) { /* Your code here */ };

// module.exports = { lightSwitch, getter }

// // example

// const artObject = {
//     $redRose: 11101,
//     metroStations: ['Park Kultury', 'Delovoy Center'],
//     busStops: ['B', 'c910', '379'],
//     $city: 10101,
//     towers: ['Oko', 'Neva'],
//     $getTransports() {
//         const stations = this.$getter('metroStations')
//         const stops = this.$getter('busStops')
//         return [...stations, ...stops]
//     },
//     $lightSwitch: lightSwitch,
//     $getter: getter,
// }

// artObject.$lightSwitch()

// // basic tests

// console.log('towers' in artObject) //-> false
// console.log(artObject.$getter('towers')) //-> [ 'Oko', 'Neva' ]
// console.log(artObject.$redRose) //-> 11101
console.log(artObject.$getTransports()) //-> [ 'Park Kultury', 'Delovoy Center', 'B', 'c910', '379' ]


// -------- INITIAL 

// helpers
const lightSwitch = function() {
  for (let key in this) {
    if (!globalThis[key]) {
      globalThis[key] = this[key];

      if (!key.startsWith('$')) {
        delete this[key]
      }
    }
  }
}

const getter = function (key) {
  return globalThis.state[key];
};

module.exports = { lightSwitch, getter };

// example

const artObject = {
  $redRose: 11101,
  $qwe: new Date(),
  metroStations: ["Park Kultury", "Delovoy Center"],
  obj: { a: { b: 1, $c: "123" } },
  busStops: ["B", "c910", "379"],
  $city: 10101,
  towers: ["Oko", "Neva"],
  $getTransports() {
    const stations = this.$getter("metroStations");
    const stops = this.$getter("busStops");
    return [...stations, ...stops];
  },
  $lightSwitch: lightSwitch,
  $getter: getter,
};

artObject.$lightSwitch();
console.log('after first switch', artObject)
artObject.$lightSwitch();
console.log('after second switch', artObject)


// basic tests

console.log("towers" in artObject); //-> false
console.log(artObject.$getter("towers")); //-> [ 'Oko', 'Neva' ]
console.log(artObject.$getter("obj")); //-> [ 'Oko', 'Neva' ]
console.log(artObject.$redRose); //-> 11101
console.log(artObject.$qwe); //-> 11101
console.log(artObject.$getTransports()); //-> [ 'Park Kultury', 'Delovoy Center', 'B', 'c910', '379' ]
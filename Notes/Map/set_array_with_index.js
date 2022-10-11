const arr = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon"];

const mapWithIndex = new Map(arr.map((value, index) => [index + 1, value]));

console.log(mapWithIndex);

// Map(5) {
//     1 => 'Bulbasaur',
//     2 => 'Ivysaur',
//     3 => 'Venusaur',
//     4 => 'Charmander',
//     5 => 'Charmeleon'
//   }

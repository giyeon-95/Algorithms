const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const map = new Map();

//set
for (let val of array) {
  map.set(val, val.toString());
}

console.log(map);
// Map(11) {
//     0 => '0',
//     1 => '1',
//     2 => '2',
//     3 => '3',
//     4 => '4',
//     5 => '5',
//     6 => '6',
//     7 => '7',
//     8 => '8',
//     9 => '9',
//     10 => '10'
//   }

//get
console.log(map.get(5)); //5

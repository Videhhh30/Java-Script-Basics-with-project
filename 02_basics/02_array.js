
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) push will add the complete array inside the array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) concat will take the element from both the arrays and add elements to a new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator (breaking of a glass example)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // complex situation inside an array there is an array and inside that there is one more array

const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. usually take depth as infinity
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // check if the given is array or not
console.log(Array.from("Hitesh")) // convert the given input as an  array
console.log(Array.from({name: "hitesh"})) // interesting will give a [] empty because it dosen't know whose array to make either key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

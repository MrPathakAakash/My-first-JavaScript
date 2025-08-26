const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "aquaman", "batman"]

// marvel_heros.push(dc_heros)// this creates array inside array, so total elements in marvel_heros is now 4
// console.log(marvel_heros[3][1]);

const heros = marvel_heros.concat(dc_heros)
console.log(heros); // now this combines 2 arrays into one
const allheros = [...dc_heros, ...marvel_heros]
console.log(allheros);
// the above method is known as spread, generally use this over concat cause this can handle more than 2 too

const anotherArr = [1,2,3,[4,5,6],7,[6,7[4,5]]]
const realanotherArr = anotherArr.flat(Infinity)
console.log(realanotherArr);
// the above method is to flat the array which means the inner array will be open and be one singular array
// and flat() -> is written the depth.. how depth you want to flatten the array


Array.isArray("Aakash") // to check is it array or not
console.log(Array.from("Aakash")) // it creates an array using all the letters
console.log(Array.from({name: "Aakash"})) // interesting case, gives an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

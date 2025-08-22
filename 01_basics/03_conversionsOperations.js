let score = "33"

console.log(typeof score);
console.log(typeof(score)); //both are same

let valueNumber = Number(score)
console.log(typeof valueNumber);
//NaN = Not a Number
// if score = null then it will print 0 or if it was undefined it will give NaN
// "33agd" -> NaN
// true -> 1; false -> 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)
// "" Empty String = false, "some string" = true in boolean
// Same we have String
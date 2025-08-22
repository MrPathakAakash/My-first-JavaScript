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

// ************************ Operations *****************************

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " Aakash"
let str3 = str1 + str2

console.log("1" + 2 + 2) // if string first then every thing is string OP = 122
console.log(1 + 2 + "2") // here its not like above so OP = 32

console.log(+true)
console.log(+"")
let gameCounter = 100
gameCounter++;
console.log(gameCounter);
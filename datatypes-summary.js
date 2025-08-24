// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
//JS is an Dynamic language

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123') // creates a unique, hidden identifier mainly used as object keys

const bigNumber = 10000n // n makes it bigInt

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["Iron man", "SpiderMan"]
// Objects in curly braces
let myObj = {
    hello: "Aakash",
    age: 22
}

const myFunction = function(){
    console.log("Hello world")
}


// ************************Memory****************************
//Types -> Stack(Primitive), Heap(Non-Primitive)
//Stack -> example ek ke upar ek, in stack if we change the value of an variable example
let anothername = "Hellozi"
let myYoutubename = anothername
myYoutubename = "Nothingzi"
console.log(anothername);
console.log(myYoutubename);
// here myYoutubename takes a copy of anothername not actual value
let userOne = {
    email: "Aakash.com",
    upi: "1ty%2"
}
// Now non primitive takes the copy reference 
let userTwo = userOne

userTwo.email = "aakashji.com" // accesing email from object
console.log(userOne.email);
console.log(userTwo.email);
//Now here cause of the reference both are changed
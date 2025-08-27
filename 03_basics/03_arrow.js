const user = {
    username: "Aakash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        //console.log(this); // this prints the current context ( ie details )
    }
}

// this refers to the current object where the function is being executed (user in this case).
// So this.username means → go to the object user and take its property username, This makes the method reusable and independent of the object name.
user.welcomeMessage()
user.username = "Akki"
user.welcomeMessage()

console.log(this); // this prints empty {} object

// in browser the global object is window object thats why we can copy all events in browser

function olazi(){
    let username = "Aakash"
    console.log(this.username); // here it will print undefined 
}

// Reason: in Node environment we cant use or call this inside a function (this works in object), but in browser environment we can access it
// But we can acces this in node when an function is attached to an object

// const chai = function(){
//     let username = "Aakash"
//     console.log(this.username); // here it will print undefined
// }

const chai = () => {
    let username = "Aakash"
    console.log(this); // prints empty {}
    
}

//Arrow functions don’t have their own this.
//They inherit this from the surrounding scope. In a Node module, the top-level this is not global, but an empty object {}.
// in browser its window

// arrow function
const addTwo = (num1,num2) => {
    return num1 + num2
}
// implicit return
const add2 = (num1,num2) => (num1 + num2)
// if curly braces used in arrow function then you have to write the return or else if used () then dont write it
// even in ojects you have to write them in paranthesis

const add1 = (num1,num2) => ({userName: "Aakash"})
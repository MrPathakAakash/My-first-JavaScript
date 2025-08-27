function sayMyName(){
    console.log("Aakash Pathak");
}

sayMyName // reference
sayMyName() // execution

function AddTwoNumbers(num1, num2){
    let result = num1+num2
    return result // return ke baad kuch bhi print nahi hota hai
    // another way
    // return num1+num2
}
// if we directlt write console.log() in the function it wont be able to get stored in a variable

function userLogInMessage(username){ // if we write username = sam, then even if when function called and nothing is given as input sam will be printed by default
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(userLogInMessage("Aakash"));
console.log(userLogInMessage("")); // prints undefined just logged in

function calculateCartPrice(...num1){ // ... rest operator
    return num1
}

console.log(calculateCartPrice(23,80,90)); // cause of rest operator the output is in array form

const user = {
    userName: "Aakash",
    price: 199
}

function handleObject(anyObject){ // function calling from object
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject()
handleObject( // this way we can change the output based upon the new input
    {
        username: "Akki",
        price: 999
    }
)

const myArray = [1,4,5,7,8]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));

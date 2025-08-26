// singleton 

// object literals (declare karne ka tarika)
// key value pair
const mySym = Symbol("key1")

const Jsuser ={
    name: "Aakash",
    [mySym]: "key1", // symbol
    age: 21,
    email: "aakashpathak1729@gmail.com",
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(Jsuser.email);
console.log(Jsuser[mySym]); // this is the correct way to access Symbols
console.log(Jsuser["email"]); // this method is used when the key is in string or any other data type

Jsuser.email = "aakashpathak@gamil.com"
//Object.freeze(Jsuser) // now we cant change the object further but if you try to do it wont show error

Jsuser.greeting = function(){
    console.log("Hello JS User");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // we will learn this in future
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


// benefits of using backticks is `` we can use ${} and write the variable in the printing itself
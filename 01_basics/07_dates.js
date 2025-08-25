// Dates typeof Date is object in java

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023, 0 , 23) // month starts from 0 , 0 -> Jan and so on
let anotherDate = new Date(2023, 0 , 23, 5 ,3) // month starts from 0 , 0 -> Jan and so on
console.log(myCreatedDate.toDateString());
// we can also give input like
let myAnotherDate = new Date("2025-08-26")

let myTimeStamp = Date.now() // gives value in miliseconds from the 1970( from which JS allows to take date)
console.log(myCreatedDate.getTime()); // gives the value in miliseconds from the created date
console.log(Math.floor(Date.now()/1000)) // gives value in seconds

let newDate = new Date();
console.log(newDate.getDay()); // it gives day similarly we have months years etc...

newDate.toLocaleString('default' , {weekday: "long"}) // click Ctrl + space to see the properties
// the above method is to customize your date
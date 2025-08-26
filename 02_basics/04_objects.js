const tinderUser = new Object()
const tinderUser1 = {}
// both above prints empty object {}

tinderUser.id = "123abc"
tinderUser.name = "Akki"
tinderUser.isLoggedin = false
console.log(tinderUser);

const regularUser = {
    email: "akki@gmail.com",
    fullname: {
        userFullname:{
            firstName: "Aakash",
            LastName: "Pathak"
        }
    }
}
console.log(regularUser.fullname.userFullname.firstName); // nesting of objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj = {obj1, obj2} // this creates an object inside object

const obj3 = Object.assign({},obj1, obj2) 
// or the best method to combine 
const objall = {...obj1,...obj2}

const users = [ // Object inside an array
    {
        id: 1,
        email: "aakashpathak@gmail.com"
    },
    {
        id: 1,
        email: "aakashpathak@gmail.com"
    },
    {
        id: 1,
        email: "aakashpathak@gmail.com"
    }
]

users[1].email

console.log(Object.keys(tinderUser)) // the output is array
console.log(Object.values(tinderUser)) // the output is array
console.log(Object.entries(tinderUser)) // the output is array of key value pair array [[key, value]]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// ***************Destructor object*****************

const course = {
    coursename: "Js",
    price: "999",
    courseInstructor: "Aakash"
}
const {courseInstructor} = course // destructuring object
console.log(course);
// this method helps to make the code clean and... we can choose one particular thing to print.
// we can also rename the key here by
const {courseInstructor: Instructor} = course
console.log(courseInstructor);
console.log(Instructor);
// see both give same results

// API is an object with no name like 
// {
//     "name": "Aakash",
//     "price": free,
//     "id": 908708
// }
// in api the key are in string
// also API can be in objects in array

//use json formater to understand the api better
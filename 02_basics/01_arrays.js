const myArr = [0,1,2,3,4] // array can have non similar items too, an object, are resizable
console.log(myArr[0]);
// in JS array copy operations create shallow copies -> copy of an object is copy whose properties share the same reference point

const myArr2 = new Array(1,2,3,4)
// in arrays we do have prototype access (simple word is methods)

// Array methods

myArr.push(6) // adds element similarly we have pop() which removes the last value
console.log(myArr);
myArr.unshift(9) // adds element in the first index
myArr.shift(9) // removes it

console.log(myArr.includes(0)); // indexOf it gives false as -1 or false

const newArr = myArr.join() // converts into a string

//slice , splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);
const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

// Slice only gives the desired value in range which is provided (end element is not included)
// Example above in slice we gave 1 - 3 so 3 will not be included in slice of array, also original array is not affected by it
// But in splice end element is included also... the original array is changed, original array now contains the remaining elements 
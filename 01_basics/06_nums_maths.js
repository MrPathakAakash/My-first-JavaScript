const score = 4040
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toFixed(2)); // for precision value
console.log(balance.toString().length);

const otherNumber = 28.9789
console.log(otherNumber.toPrecision(3)); // now here 3 means the first 3 digits gets precised if the digits are more than 3 and the precision used is less than 3 then the output is given in exponential form

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // gives commas to the hundreds
Number.MAX_VALUE // for max same for min

// ***************************Maths*********************************

console.log(Math); // here Math is object
console.log(Math.abs(-4)); // absolute turns minus to +ve
console.log(Math.round(4.5)); // round off
console.log(Math.ceil(4.5)); // chooses ceiling value
console.log(Math.floor(4.5)); // chooses floor value

console.log(Math.random()); // gives random value between 0-1
console.log((Math.random()*10) + 1); // gives random btw 1-10


// remember the below formula
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
// the above formula is for to get an approx value between min and max
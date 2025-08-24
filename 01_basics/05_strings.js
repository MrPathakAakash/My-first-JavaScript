const name = "Aakash"
const repoCount = "70"

// console.log(name + repoCount + "value");
// now the above method is correct but very old
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('Aakash-hc') // String object
console.log(gameName[0])
console.log(gameName.__proto__) //proto -> are the methods/functions of strings
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = console.log(gameName.substring(0,4))
//in subString we cant give negative values
const anotherString = gameName.slice(0,4)
const newString1 = "   hiiii   "
console.log(newString1.trim()) // works only on white space characters

const url = "https://aakash.com/aakash%23pathak"
url.replace('%20','-') // the first input is what to replace? second is what to replace with
url.includes('aakash') // to check the particular input is present or not
gameName.split('-') // it will find - in the gameName and give the output like ['Aakash', 'hc']
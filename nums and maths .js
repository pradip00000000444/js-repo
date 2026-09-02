const game = 33
// console.log(game)

const balance = new Number(100)
// console.log(balance) 

// console.log(balance.toFixed(1)) // 100.0
const othernumber = 123.892
// console.log(othernumber.toPrecision(3));
const  hundreds = 1000000 
// console.log(hundreds.toLocaleString("en-RS"))


// ************************maths*******************************************

console.log(Math) 
// console.log(Math.abs(-4)); // changing negative number to positive number  
// console.log(Math.round(5.7)); // round the number to nearest integer
// console.log(Math.ceil(5.4)); // round the number up to the nearest integer
// console.log(Math.floor(5.9)); // round the number down to the nearest integer
// console.log(Math.min(2,4,6,8,10)); // return the minimum number from the given numbers
// console.log(Math.max(2,4,6,8,10)); // return the maximum number from the given numbers

console.log(Math.random()); // return the random number between 0 to 1
console.log(Math.floor(Math.random() * 10) + 1); // return the random number between 1 to 10

const min = 10
const max =  20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // return the random number between 10 to 20

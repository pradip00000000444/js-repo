// ************array***********

const myArray = [0,1,2,3,4,5]
const myheros = ["ironman","spiderman","thor"]
const mylove = new Array(1,2,3,4,5)// 3 ways of declaring array 
// console.log(myArray[1]);


// array methods 
// myArray.push(6)
// myArray.push(7) // cont total array numbers 
// myArray.pop() // remove added array value

// myArray.unshift(9) // adding number in the first of the array 
// myArray.shift() // remove added num to array recently
// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3))

// const newarray = myArray.join()
// console.log(myArray)
// console.log(typeof newarray)

// slice,splice (imp for interview])

console.log("A", myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1) 
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
 
console.log("c", myArray);
console.log(myn2) 

// splice manupulates thge orgingal array 
// slice doesnt manupulate the orginal arrya 
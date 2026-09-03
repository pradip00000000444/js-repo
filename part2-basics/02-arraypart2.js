const marvel_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][2]) // accssing the valude of the third element. 
 
// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros); // push and concat is  same as push methods but also makes a new array by joining the old two.

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)  // same as concat 

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 
const realarray = anotherarray.flat(Infinity)
console.log(realarray) // flat is used to merge all arrray in single array and infinity is used to find the depth of the array which simpily means the how amny arrys are there in one single array. 


console.log(Array.isArray("pradip")) // to check this string is array or not.
console.log(Array.from("pradip")) // .form used to convert the respective string into the array.  
console.log(Array.from({name: "pradip"})) // imp f0r interview prepective.


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3)) // .of usd to make these iteams in one singke array.

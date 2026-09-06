// const tinderuser = new Object() // singleton 
const tinderuser = {} // non singleton 
tinderuser.id = "123abc"
tinderuser.name = "harshit"
tinderuser.isLoggedIn = false
// console.log(tinderuser)

const pradipuser = {
  email: "pradip000.com",
  fullname: {
    userfullname: {
      firstname: "Pradip",
      lastname: "Bhat"
    }
  }
} 
// objects in objects 
// console.log(pradipuser.email,pradipuser.fullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3)   // ... means spread it is used to comboine the objects or arrays

console.log(Object.keys(tinderuser))  // coverts the objects into array into the 
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('pradiphero')) // to checl whether number is present or not in the program.

const course = {
 coursename: "js hindi classes",
 price: "1000",
 courseteacher: "pradip"
}
// course.courseteacher

const{courseteacher: og} = course // alternative of  console.log to print (de-structing concept)
console.log(og)

// console.log(course.courseteacher)

// **************************json concept**********************
// {
//   "name": "pradipp",
//   "course": "nepali in nepali",
//   "price":"free"
// }


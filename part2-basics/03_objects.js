// singleton
// object literals   

//object literals 
const mysym = Symbol("key1")

const Jsuser = {
  name: "pradip",
  "full name" : "pradip bhat", // thiss type of iteam can't be access from . method
  location: "kathmandu", 
  [mysym]: "mykey1", // to declare mykey1 as symbol we should use [] tothe object then print also like below. 
  email:"pradipbhat150@gmail.com",
  isLoggedin: false,
  lastlogindays: ["sunday", "tuesday"] 
}
// console.log(Jsuser.email) // one methods 
// console.log(Jsuser["email"]) // another method 
// console.log(Jsuser["full name"]) // second tyoe of object can be only access form this method 
// console.log(Jsuser[mysym]) 

Jsuser.email = "pradip@1111.com" 
// Object.freeze(Jsuser) // .freez dosent allow user to change the newly added value.
Jsuser.email = "pradip@1444.com"      
console.log(Jsuser) 

 Jsuser.greeting = function() {
  console.log("hello Jsuser")
 }
 console.log(Jsuser.greeting()); 

 Jsuser.greetingtwo = function() {
  console.log(`hello Jsuser,${this.name}`)
 }
 console.log(Jsuser.greetingtwo()); 
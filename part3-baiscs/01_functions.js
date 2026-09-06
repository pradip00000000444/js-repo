function pradiphero() {  // this fucntion defination 
  console.log("p")
  console.log("r")
  console.log("a")
  console.log("d")
  console.log("i")
  console.log("p")
}
// pradiphero() // () these are the refrence to excute the program


// ************************two number add ***************

// function addtwonumbers(number1, number2){ // inside the () parnetheses number 1 and 2 are known as parameters.
//    console.log(number1 + number2); 
// }
function addtwonumbers(number1, number2){ 
   
  let result = number1 + number2 // another way t0 print the result 
  return result 
 
  return number1 + number2  // short way to print result 

}
// addtwonumbers() // here the outpuut will be NaN because we havent passed arguments. 
const result = addtwonumbers(3,10) // inside these () are knom as arguments
 
console.log("result: ",result); 


function loginusermessage(username = "pradip") {
  if(!username) {
  console.log("please enter a username");
  return
  }
  return `${username} just logged in`
}
console.log(loginusermessage())
// premitive  datatype (they are call by value)

// 7 types :string,number,boolean,null,undefined,symbol,bigint 

const score = "100"
const scorevalue = "100.3"
const isloggedin = true
const temperature = null 
let useremail; 
const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid)  

const bignumber = 1234567890888888888888n //to make number as bigint use n in the end of the number.

// refrence datatype (non premitive datattype)

// array,object,function 
const heros = ["captain america","ironman","spiderman"]
let  myobj = { 
  name: "pradip",
  age: 20
}

const myfunction = function(){
  console.log("hello world")
}
console.log(typeof anotherid)


//************************************************* */\


// stack (use in premitive datatype) and heap (use in refrence datatype)

let myytname = "pradip"
let  anotheranme = myytname
anotheranme = "bhat"
console.log(myytname) //pradip
console.log(anotheranme) //bhat

let  userone ={
  email: "user@google.com",
  upi : "user@upi"
}
let usertwo = userone
usertwo.email = "pradipbhat150@gmail.com"
console.log(userone.email) // pradipbhat150@gmail.com
console.log(usertwo.email) // pradipbhat150@gmail.com

  // using stack memory we get the copy of the valut 
  // usinh heap memeory we get the refrence of the value so if we change the value of refrence it will also change the original value.  3d
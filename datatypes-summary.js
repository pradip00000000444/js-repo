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

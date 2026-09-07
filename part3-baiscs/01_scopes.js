 var c = 300 
if (true) { // inside the scopes taht is called local scopes and outside of the scopes these are called global scopes. 
  let a =  10 // gobal scopes things are present in local scopes but local scopes things shouldnt be outside of the local {}
  const b = 20
  c =30
}
// console.log(a)
// console.log(b)
console.log(c) 

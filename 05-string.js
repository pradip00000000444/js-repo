const name = "pradip"
const repocount = 40

// console.log(name + repocount + " is okay") // here we are using + operator to concatinate the string and number. it will convert number into string and then concatinate it.

console.log(`hello my name is ${name} and my repo count is ${repocount}`) // here we are using backtick to concatinate the string and number. it will not convert number into string and then concatinate it. it will keep the number as it is. this is called template string.

const gamename = String(`pradip-099`)
// console.log(gamename.toUpperCase()) // here we are using new String() to create a string object. it will create a string object and not a string primitive. it will keep the string as it is. this is called string object.
console.log(gamename.length) // here we are using length property to get the length of the string. it will return the length of the string. this is called string length.
// console.log(gamename.charAt(2)) // here we are using charAt() method to get the character at the specified index. it will return the character at the specified index. this is called string charAt().
// console.log(gamename.indexOf(`d`))

// const newstring = gamename.substring (0, 4) // here we are using substring() method to get the substring of the string. it will return the substring of the string. this is called string substring().
// console.log(newstring) 

const anotherstring = gamename.slice(-10, 4) // here we are using slice() method to get the substring of the string. it will return the substring of the string. this is called string slice().
console.log(anotherstring)

const newstring1 = "  pradeep  "
console.log(newstring1.trim()) // here we are using trim() method to remove the whitespace from the string. it will return the string without whitespace. this is called string trim().

const url = "https://www.pradip%20bhat.com"
console.log(url.replace("%20", "_")) // here we are using replace() method to replace the specified string with another string. it will return the string with the replaced string. this is called string replace().

console.log(url.includes("harshit")) // here we are using includes() method to check whether the specified string is present in the string or not. it will return true if the specified string is present in the string otherwise it will return false. this is called string includes().

console.log(gamename.split("-")) // here we are using split() method to split the string into an array of substrings. it will return an array of substrings. this is called string split().

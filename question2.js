// question1.js
// JavaScript Fundamentals, Reverse String

function reverseString(str) {
    let reversedStr = ''; // This is the variable that will hold the reversed string
    for (let i = str.length - 1; i >= 0; i--) { // This loop will iterate through the string from the last character to the first
      reversedStr += str[i]; // This will add the current character to the reversedStr variable
    }
    return reversedStr;
  }
  
  // This outputs the reversed string which outputs 'olleh'
  console.log(reverseString("hello"));
  
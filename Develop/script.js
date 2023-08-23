// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "[",
  "]",
  "~",
  "-",
  "_",
  ".",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getRandomCharacter(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomPasswordChar = array[randomIndex];
  return randomPasswordChar;
}

function generatePassword(){
  // We need to capture the length of the password
  // We need to capture which character types they want for the password
  var passwordLength = prompt("How many characters should the password be?");
  var hasSpecialChars = confirm("Do you want special characters?");
  var hasUpperCase = confirm("Do you want upperCase letters?");
  var hasLowerCase = confirm("Do you want lowerCase letters?");
  var hasNumbers = confirm("Do you want numbers?");

  var passwordOptions = {
    passwordLength: passwordLength,
    hasSpecialChars: hasSpecialChars,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
  };
  var possiblePasswordChars = [];
  var password = [];

  if (passwordOptions.hasSpecialChars) {
    possiblePasswordChars = possiblePasswordChars.concat(specialCharacters);
    var randomChar = getRandomCharacter(specialCharacters);
    password.push(randomChar);
}
if (passwordOptions.hasNumbers) {
    possiblePasswordChars = possiblePasswordChars.concat(hasNumbers);
    var randomChar = getRandomCharacter(hasNumbers);
    password.push(randomChar);
}
if (passwordOptions.hasUpperCase) {
    possiblePasswordChars = possiblePasswordChars.concat(hasUpperCase);
    var randomChar = getRandomCharacter(hasUpperCase);
    password.push(randomChar);
}
if (passwordOptions.hasLowerCase) {
    possiblePasswordChars = possiblePasswordChars.concat(hasLowerCase);
    var randomChar = getRandomCharacter(hasLowerCase);
    password.push(randomChar);
}
​
for (var i = 0; i < passwordOptions.length - password.length; i++) {
    var randomChar = getRandomCharacter(possiblePasswordChars);
    password.push(randomChar);
}
}

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = " ";
  var pwLength = window.prompt(
    "Enter the length of your passwork (8-128 characters)"
  );
  console.log(pwLength);
  //test for a good password
  if (pwLength > 7 && pwLength < 129) {
    window.alert(
      "Your password length is " + pwLength + ". Press 'OK' to continue"
    );

    // ask if they want lower case letters
    var passLower = confirm("Do you want to include lower case letters?")
    // ask if they want upper case letters
    var passUpper = confirm("Do you want to include upper case letters?")
    // ask if they want numbers
    var passNumber = confirm("Do you want to include numbers?")
    // ask if they want special characters
    var passSp = confirm("Do you want to include special characters?")
    // final password options
    var finalPasswordArray = []
    if (passLower) {
      finalPasswordArray = finalPasswordArray.concat(lowercase)
    }
    if (passUpper) {
      finalPasswordArray = finalPasswordArray.concat(uppercase)
    }
    if (passNumber) {
      finalPasswordArray = finalPasswordArray.concat(numberChars)
    }
    if (passSp) {
      finalPasswordArray = finalPasswordArray.concat(specialChars)
    }
    console.log(finalPasswordArray)
    var word = "";
    //pick target number (pwLength) of characters from built array (finalPasswordArray)
    for (let index = 0; index < pwLength; index++) {
      //get random values from array
      word += finalPasswordArray[Math.floor(Math.random() * finalPasswordArray.length)];
    
    }
    return word;
  } else {
    window.alert(
      "Password length must be between 8 and 128 characters.  Click 'OK' and input a valid value"
    );
    generatePassword();
  }
}



// Write password to the #password input
function writePassword() {

  // get the password back from 'generatePassword' function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// var paswordLength = window.prompt("Enter the length of your passwork (8-128 characters)");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

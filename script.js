// Assignment Code

var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword(){
  
  var numberChar = prompt("How many characters do you want your password to be?");
  var parseLength = parseInt(numberChar);
  var lengthIsNaN = isNaN(parseLength);
  if (lengthIsNaN){
    alert("Not a Number");
    return;
  }
  else {
    while (parseLength <= 7 || parseLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var parseLength = (prompt("How many characters would you like your password to contain?"));
      } 

    }
    
    var confirmSpecialChar = confirm("Click OK  to include special characters?");
    var confirmNumericChar = confirm("Click OK to include numeric characters?");    
    var confirmLowerCase = confirm("Click OK to include lowercase characters?");
    var confirmUpperCase = confirm("Click OK to include uppercase characters?");
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialChar === false && confirmNumericChar === false) {
        alert("You must choose at least one parameter");
        return;
      } 
      var allowed = [];
      if (confirmUpperCase){ allowed = allowed.concat(upper)} //(allowed.confirmUpperCase ="QWERTYUIOPASDFGHJKLZXCVBNM");
      if (confirmLowerCase) {allowed = allowed.concat(lower)} //(allowed.confirmLowerCase = "qwertyuiopasdfghjklzxcvbnm");
      if (confirmNumericChar) {allowed = allowed.concat(number)} //(allowed.confirmNumericChar = "1234567890");
      if (confirmSpecialChar) {allowed = allowed.concat(special)} //(allowed.confirmSpecialChar = "!@#$%^&*(){}[]=<>/,.")
      
      console.log(allowed)

      var password = "";
      
      for (var i = 0; i < numberChar; i++) {
        password = password + allowed[Math.floor(Math.random() * allowed.length)];
        }
     
      return password;
      
        // console.log(password)
      
      

  // if parseLength was valid, then we jsut continue code execution ehre.

  // console.log(numberChar);
  // console.log(`numberChar is of type ${typeof numberChar}`);
  //last line of this function returns
  // a string. (the password)
  // return "this will be the end password"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 



 

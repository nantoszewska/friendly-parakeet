var charArray = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbolArray = [".", ":", ";", "~", "!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","|","/","?","<",">"];

function lengthCriteria() {
  var characterNumber = window.prompt("Desired number of characters");
    if (characterNumber >= 8 && characterNumber <= 128) {
      return characterNumber;
  } else {
    window.alert("Please enter a number between 8 and 128.");
    return lengthCriteria();
  }
}

function numericCriteria() {
  var numeric = window.confirm("Do you wish to include numbers?");
  return numeric;
}

function lowerCaseCriteria() {
  var lowerCase = window.confirm("Do you wish to include lower case characters?");
  return lowerCase;
}

function upperCaseCriteria() {
  var upperCase = window.confirm("Do you wish to include upper case characters?");
  return upperCase;
}

function specialCharCriteria() {
  var specialChar = window.confirm("Do you wish to include special characters, such as '!' or '#'?");
  return specialChar;
}

function randomNumber(max) {
  var value = Math.floor(Math.random() * max);
  return value;
};

function criteraChoose(criteria) {
  if(criteria.active) {
    if(criteria.type === "lowercase") {
      return charArray[randomNumber(charArray.length)].toLowerCase();
    } else if(criteria.type === "uppercase") {
      return charArray[randomNumber(charArray.length)].toUpperCase();
    } else if(criteria.type === "number") {
      return randomNumber(9);
    } else if(criteria.type === "symbol") {
      return symbolArray[randomNumber(symbolArray.length)];
    } 
  }
};

function generatePassword() {
  var passwordLength = lengthCriteria();
  var password = "";

  var isLowerCase = { 
    type: "lowercase", 
    active: lowerCaseCriteria() 
  };
  var isUpperCase = { 
    type: "uppercase", 
    active: upperCaseCriteria() 
  };
  var isSpecialChar = { 
    type: "symbol", 
    active: specialCharCriteria() 
  };
  var isNumeric = { 
    type: "number", 
    active: numericCriteria() 
  };

  var criteriaArray = [isLowerCase, isUpperCase, isSpecialChar, isNumeric];
  
  while (password.length < passwordLength) {
    var pointer = { 
      criteria : criteriaArray[randomNumber(4)],
    };
    if(pointer.criteria.active){
      password += criteraChoose(pointer.criteria);
    } else {
      pointer.criteria = criteriaArray[randomNumber(4)]
    }
  };

  return password
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

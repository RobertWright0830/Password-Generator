// add a function to sort the generated pasword since it currently has the first characters forced
//add check to ensure at least one character type was selected
//need to reorder this so that prompts occur after selecting the generate password button and displayed after all proompts entered
//deploy to live URL
//polish full experience
//add comments
//continue additional commits
//update README file
//submit challenge



// // Assignment Code
var generateBtn = document.querySelector("#generate");
var pass0 = "";
var tempUCStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var tempLCStr = "abcdefghijklmnopqrstuvwxyz";
var tempNumberStr = "0123456789";
var tempSpclCharStr = " !\"#$%&'()*+,-./:;<=>?@[]^\\_`{|}~";
var usedCharacters = 0;
var passwordString = "";

function charaCountFunction() {
  var charaCount = prompt(
    "How many characters should the password be? (At least 8, and no more than 128) "
  );

  if (charaCount >= 8 && charaCount <= 128) {
    console.log("valid number");
    return charaCount;
  } else {
    alert(
      "The character count is not within the required range of 8-128.  Please enter a valid number."
    );
    return charaCountFunction();
  }
}

passLength = charaCountFunction();
console.log(passLength);

function inclUpperCaseFunction() {
  var inclUpperCase = prompt(
    "Do you want to include uppercase letters in the password? (Y or N)"
  );

  if (inclUpperCase === "Y") {
    var randomUCCharacter = Math.floor(Math.random() * tempUCStr.length);
    var reqdUpperCase = tempUCStr.charAt(randomUCCharacter);
    pass1 = pass0 + reqdUpperCase;
    console.log(pass1);
    return pass1;
  } else if (inclUpperCase === "N") {
    pass1 = pass0;
    console.log(pass1);
    return pass1;
  } else {
    alert(
      "Invalid Response.  Please answer in the form of uppercase Y or uppercase N."
    );
    return inclUpperCaseFunction();
  }
}

pass1 = inclUpperCaseFunction();
if (pass1 != pass0) {
  passwordString = passwordString + tempUCStr;
}
console.log(passwordString);
console.log(pass1);

function inclLowerCaseFunction() {
  var inclLowerCase = prompt(
    "Do you want to include lowercase letters in the password? (Y or N)"
  );

  if (inclLowerCase === "Y") {
    var randomLCCharacter = Math.floor(Math.random() * tempLCStr.length);
    var reqdLowerCase = tempLCStr.charAt(randomLCCharacter);
    pass2 = pass1 + reqdLowerCase;
    console.log(pass2);
    return pass2;
  } else if (inclLowerCase === "N") {
    pass2 = pass1;
    console.log(pass2);
    return pass2;
  } else {
    alert(
      "Invalid Response.  Please answer in the form of uppercase Y or uppercase N."
    );
    return inclLowerCaseFunction();
  }
}

pass2 = inclLowerCaseFunction();
if (pass2 != pass1) {
  passwordString = passwordString + tempLCStr;
}
console.log(passwordString);
console.log(pass2);

function inclNumberFunction() {
  var inclNumber = prompt(
    "Do you want to include numbers in the password? (Y or N)"
  );

  if (inclNumber === "Y") {
    var randomNumber = Math.floor(Math.random() * tempNumberStr.length);
    var reqdNumber = tempNumberStr.charAt(randomNumber);
    pass3 = pass2 + reqdNumber;
    console.log(pass3);
    return pass3;
  } else if (inclNumber === "N") {
    pass3 = pass2;
    console.log(pass3);
    return pass3;
  } else {
    alert(
      "Invalid Response.  Please answer in the form of uppercase Y or uppercase N."
    );
    return inclNumberFunction();
  }
}

pass3 = inclNumberFunction();
if (pass3 != pass2) {
  passwordString = passwordString + tempNumberStr;
}
console.log(passwordString);
console.log(pass3);

function inclSpclCharFunction() {
  var inclSpclChar = prompt(
    "Do you want to include special characters in the password? (Y or N)"
  );

  if (inclSpclChar === "Y") {
    var randomSpclChar = Math.floor(Math.random() * tempSpclCharStr.length);
    var reqdSpclChar = tempSpclCharStr.charAt(randomSpclChar);
    pass4 = pass3 + reqdSpclChar;
    console.log(pass4);
    return pass4;
  } else if (inclSpclChar === "N") {
    pass4 = pass3;
    console.log(pass4);
    return pass4;
  } else {
    alert(
      "Invalid Response.  Please answer in the form of uppercase Y or uppercase N."
    );
    return inclSpclCharFunction();
  }
}

pass4 = inclSpclCharFunction();
if (pass4 != pass3) {
  passwordString = passwordString + tempSpclCharStr;
}
console.log(passwordString);
console.log(pass4);

alert(
  "To generate a random password for these conditions, click on the Generate Password button."
);

function generatePassword() {
  remainingPassLength = passLength - pass4.length;
  for (let i = 1; i <= remainingPassLength; i++) {
    var char = Math.floor(Math.random() * passwordString.length + 1);

    pass4 += passwordString.charAt(char);
  }

  return pass4;
}

console.log(generatePassword());

generatePassword();

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

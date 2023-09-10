// Variables Defined
var generateBtn = document.querySelector("#generate"); //gets handle of generate button
var pass0 = ""; //starts password as a blank string
var lettersForRandomSelection = ""; //starts letters to be considered for random selection and is added to based on prompts

//defines the various character types to use if selected during prompt
var tempUCStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var tempLCStr = "abcdefghijklmnopqrstuvwxyz";
var tempNumberStr = "0123456789";
var tempSpclCharStr = "!\"#$%&'()*+,-./:;<=>?@[]^\\_`{|}~";

//function to determine the number of characters for password
function charaCountFunction() {
  var charaCount = prompt(
    "How many characters should the password be? (At least 8, and no more than 128) "
  );
  //check for valid response
  if (charaCount >= 8 && charaCount <= 128) {
    return charaCount;
  } else {
    alert(
      "The character count is not within the required range of 8-128.  Please enter a valid number."
    );
    return charaCountFunction();
  }
}

//function to prompt whether upper case must be included
function inclUpperCaseFunction() {
  var inclUpperCase = prompt(
    "Do you want to include uppercase letters in the password? (Y or N)"
  );
  var inclUpperCase = inclUpperCase.toUpperCase(); //forces response to uppercase
  //check for valid response
  if (inclUpperCase === "Y") {
    //forces one random upper case if selected
    var randomUCCharacter = Math.floor(Math.random() * tempUCStr.length);
    var reqdUpperCase = tempUCStr.charAt(randomUCCharacter);
    pass1 = pass0 + reqdUpperCase; //adds to inital password
    return pass1; //function returns the updated password value to include upper case if required for inclusion
  } else if (inclUpperCase === "N") {
    //excludes forced upper case if not selected
    pass1 = pass0;
    return pass1; //function returns password value with no uppercase if not selected
  } else {
    //if invalid response gives alert and runs through function again until valid response provided
    alert(
      "Invalid Response.  Please answer in the form of uppercase Y or uppercase N."
    );
    return inclUpperCaseFunction();
  }
}

//function to prompt whether lower case must be included
function inclLowerCaseFunction() {
  var inclLowerCase = prompt(
    "Do you want to include lowercase letters in the password? (Y or N)"
  );
  var inclLowerCase = inclLowerCase.toUpperCase(); //forces response to uppercase
  //check for valid response
  if (inclLowerCase === "Y") {
    //forces one random lower case if selected
    var randomLCCharacter = Math.floor(Math.random() * tempLCStr.length);
    var reqdLowerCase = tempLCStr.charAt(randomLCCharacter);
    pass2 = pass1 + reqdLowerCase; //adds to building password
    return pass2; //function returns the updated password value to include lower case if required for inclusion
  } else if (inclLowerCase === "N") {
    //excludes forced lower case if not selected
    pass2 = pass1;
    return pass2; //function returns password value with no lowercase if not selected
  } else {
    //if invalid response gives alert and runs through function again until valid response provided
    alert(
      "Invalid Response.  Please answer in the form of uppercase Y or uppercase N."
    );
    return inclLowerCaseFunction();
  }
}

//function to prompt whether number must be included
function inclNumberFunction() {
  var inclNumber = prompt(
    "Do you want to include numbers in the password? (Y or N)"
  );
  var inclNumber = inclNumber.toUpperCase(); //forces response to uppercase
  //check for valid response
  if (inclNumber === "Y") {
    //forces one random number if selected
    var randomNumber = Math.floor(Math.random() * tempNumberStr.length);
    var reqdNumber = tempNumberStr.charAt(randomNumber);
    pass3 = pass2 + reqdNumber; //adds to building password
    return pass3; //function returns the updated password value to include number if required for inclusion
  } else if (inclNumber === "N") {
    //excludes forced number if not selected
    pass3 = pass2;
    return pass3; //function returns password value with no number if not selected
  } else {
    //if invalid response gives alert and runs through function again until valid response provided
    alert(
      "Invalid Response.  Please answer in the form of uppercase Y or uppercase N."
    );
    return inclNumberFunction();
  }
}

//function to prompt whether special characters must be included
function inclSpclCharFunction() {
  var inclSpclChar = prompt(
    "Do you want to include special characters in the password? (Y or N)"
  );
  var inclSpclChar = inclSpclChar.toUpperCase(); //forces response to uppercase
  //check for valid response
  if (inclSpclChar === "Y") {
    //forces one random special character if selected
    var randomSpclChar = Math.floor(Math.random() * tempSpclCharStr.length);
    var reqdSpclChar = tempSpclCharStr.charAt(randomSpclChar);
    pass4 = pass3 + reqdSpclChar; //adds to building password
    return pass4; //function returns the updated password value to include special character if required for inclusion
  } else if (inclSpclChar === "N") {
    //excludes forced special character if not selected
    pass4 = pass3;
    return pass4; //function returns password value with no special character if not selected
  } else {
    //if invalid response gives alert and runs through function again until valid response provided
    alert(
      "Invalid Response.  Please answer in the form of uppercase Y or uppercase N."
    );
    return inclSpclCharFunction();
  }
}

//function builds string of numbers available for random selection based on prompt responses
//also determines remaining number of characters needed to complete password count by subtracting
//characters already generated and built from the total count needed
function generatePassword() {
  lettersForRandomSelection = "";

  passLength = charaCountFunction(); //assigns character count function to variable

  //identifies whether an UpperCase was added to building password to determine whether they should
  //be included in random choices
  pass1 = inclUpperCaseFunction();
  if (pass1 != pass0) {
    lettersForRandomSelection = lettersForRandomSelection + tempUCStr;
  }

  //identifies whether a Lower Case was added to building password to determine whether they should
  //be included in random choices
  pass2 = inclLowerCaseFunction();
  if (pass2 != pass1) {
    lettersForRandomSelection = lettersForRandomSelection + tempLCStr;
  }

  //identifies whether a Number was added to building password to determine whether they should
  //be included in random choices
  pass3 = inclNumberFunction();
  if (pass3 != pass2) {
    lettersForRandomSelection = lettersForRandomSelection + tempNumberStr;
  }

  //identifies whether a Special Character was added to building password to determine whether they should
  //be included in random choices
  pass4 = inclSpclCharFunction();
  if (pass4 != pass3) {
    lettersForRandomSelection = lettersForRandomSelection + tempSpclCharStr;
  }

  //determines remaining number of characters needed by looking at full length needed
  //and subtracting those already selected then creates a loop to randomly select from
  //character types selected from prompts
  remainingPassLength = passLength - pass4.length;
  for (let i = 1; i <= remainingPassLength; i++) {
    var char = Math.floor(Math.random() * lettersForRandomSelection.length + 1);

    pass4 += lettersForRandomSelection.charAt(char);
  }

  return pass4;
}

//because the first characters were forced into their selected position in order of prompt
//they weren't truly random therefore this function is invoked to randomize the order while
//still ensuring one of each character type requested is included.
function shuffledPasswordFunction(inputString) {
  // Converts the string into an array for shuffling
  var charArray = inputString.split("");

  // loop created to shuffle
  for (let i = charArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }

  // shuffled characters are joined back together
  var shuffledString = charArray.join("");

  return shuffledString;
}

// Write password to the #password input
function writePassword() {
  var unshuffledPassword = generatePassword();
  var shuffledPassword = shuffledPasswordFunction(unshuffledPassword);
  var passwordText = document.querySelector("#password");

  passwordText.value = shuffledPassword;
}

//initial alert to inform to click on generate password button to get started
alert(
  "To generate a random password for desired conditions, click on the Generate Password button."
);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

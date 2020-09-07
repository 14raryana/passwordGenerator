var lowercaseAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseAlphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberArray = "0123456789".split("");
var specialCharacterArray = "~!@#$%^&*()-_=+[{]}:;|".split("");
var finalArray;
var password;    
var numberOfCharacters;
var joinedPassword;
const MIN_NUMBER_OF_CHARACTERS = 8;
const MAX_NUMBER_OF_CHARACTERS = 128;




// var characters = document.getElementById("numberOfCharacters").value;

//  var num = Math.floor(Math.random()*finalArray.length);

 function characterFunction() {
  //  console.log("password character function");

  var characters = document.getElementById("numberOfCharacters").value;

  if (characters == "") {
    alert("You must choose the number of characters for your password");
  }
  else if (characters < MIN_NUMBER_OF_CHARACTERS || characters > MAX_NUMBER_OF_CHARACTERS) {
    alert("You must choose a number between 8 and 128 inclusive");
  }
  else if (characters >= MIN_NUMBER_OF_CHARACTERS && characters <= MAX_NUMBER_OF_CHARACTERS) {
    numberOfCharacters = parseInt(characters);
    // var password = new Array(numberOfCharacters);
    // console.log("it worked");
    password = new Array();
    finalArray = new Array();
    passwordCriteriaFunction();
  }
  // return numberOfCharacters;
 }

function passwordCriteriaFunction() {

var uppercase = document.getElementById("uppercase").checked;
var lowercase = document.getElementById("lowercase").checked;
var numbers = document.getElementById("number").checked;
var specialCharacters = document.getElementById("specialCharacter").checked;
// finalArray.length = 0;

  // console.log("criteria function");

  //1 -----
  if (!uppercase && !lowercase && !numbers && !specialCharacters) {
    alert("must choose at least one criteria using the checkboxes")
  }
  //2 u
  else if (uppercase && !lowercase && !numbers && !specialCharacters) {
    for (i = 0; i < uppercaseAlphabetArray.length; i++) {
      finalArray.push(uppercaseAlphabetArray[i]);
    }
    console.log("final array length " + finalArray.length);
    console.log("uppercase");

}
  //3 l
  else if (!uppercase && lowercase && !numbers && !specialCharacters) {
    for (i = 0; i < lowercaseAlphabetArray.length; i++) {
      finalArray.push(lowercaseAlphabetArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("lowercase");

  }
  //4 n
  else if (!uppercase && !lowercase && numbers && !specialCharacters) {
    for (i = 0; i < numberArray.length; i++) {
      finalArray.push(numberArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("number");

  }
  //5 s
  else if (!uppercase && !lowercase && !numbers && specialCharacters) {
    for (i = 0; i < specialCharacterArray.length; i++) {
      finalArray.push(specialCharacterArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("special");

  }
  //6 ul
  else if (uppercase && lowercase && !numbers && !specialCharacters) {
    for (i = 0; i < uppercaseAlphabetArray.length; i++) {
      finalArray.push(uppercaseAlphabetArray[i]);
    }
    for (i = 0; i < lowercaseAlphabetArray.length; i++) {
      finalArray.push(lowercaseAlphabetArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("uppercase lowercase");

  }
  //7 un
  else if (uppercase && !lowercase && numbers && !specialCharacters) {
    for (i = 0; i < uppercaseAlphabetArray.length; i++) {
      finalArray.push(uppercaseAlphabetArray[i]);
    }
    for (i = 0; i < numberArray.length; i++) {
      finalArray.push(numberArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("uppercase number");

  }
  //8 us
  else if (uppercase && !lowercase && !numbers && specialCharacters) {
    for (i = 0; i < uppercaseAlphabetArray.length; i++) {
      finalArray.push(uppercaseAlphabetArray[i]);
    }
    for (i = 0; i < specialCharacterArray.length; i++) {
      finalArray.push(specialCharacterArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("uppercase special");

  }
  //9 ln
  else if (!uppercase && lowercase && numbers && !specialCharacters) {
    for (i = 0; i < lowercaseAlphabetArray.length; i++) {
      finalArray.push(lowercaseAlphabetArray[i]);
    }
    for (i = 0; i < numberArray.length; i++) {
      finalArray.push(numberArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("lowercase number");

  }
  //10 ls
  else if (!uppercase && lowercase && !numbers && specialCharacters) {
    for (i = 0; i < lowercaseAlphabetArray.length; i++) {
      finalArray.push(lowercaseAlphabetArray[i]);
    }
    for (i = 0; i < specialCharacterArray.length; i++) {
      finalArray.push(specialCharacterArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("lowercase special");

  }
  //11 ns
  else if (!uppercase && !lowercase && numbers && specialCharacters) {
    for (i = 0; i < numberArray.length; i++) {
      finalArray.push(numberArray[i]);
    }
    for (i = 0; i < specialCharacterArray.length; i++) {
      finalArray.push(specialCharacterArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("number special");

  }
  //12 uln
  else if (uppercase && lowercase && numbers && !specialCharacters) {
    for (i = 0; i < uppercaseAlphabetArray.length; i++) {
      finalArray.push(uppercaseAlphabetArray[i]);
    }
    for (i = 0; i < lowercaseAlphabetArray.length; i++) {
      finalArray.push(lowercaseAlphabetArray[i]);
    }
    for (i = 0; i < numberArray.length; i++) {
      finalArray.push(numberArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("uppercase lowercase number");

  }
  //13 lns
  else if (!uppercase && lowercase && numbers && specialCharacters) {
    for (i = 0; i < lowercaseAlphabetArray.length; i++) {
      finalArray.push(lowercaseAlphabetArray[i]);
    }
    for (i = 0; i < numberArray.length; i++) {
      finalArray.push(numberArray[i]);
    }
    for (i = 0; i < specialCharacterArray.length; i++) {
      finalArray.push(specialCharacterArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("lowercase number special");

  }
  //14 uns
  else if (uppercase && !lowercase && numbers && specialCharacters) {
    for (i = 0; i < uppercaseAlphabetArray.length; i++) {
      finalArray.push(uppercaseAlphabetArray[i]);
    }
    for (i = 0; i < numberArray.length; i++) {
      finalArray.push(numberArray[i]);
    }
    for (i = 0; i < specialCharacterArray.length; i++) {
      finalArray.push(specialCharacterArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("uppercase number special");

  }
  //15 uls
  else if (uppercase && lowercase && !numbers && specialCharacters) {
    for (i = 0; i < uppercaseAlphabetArray.length; i++) {
      finalArray.push(uppercaseAlphabetArray[i]);
    }
    for (i = 0; i < lowercaseAlphabetArray.length; i++) {
      finalArray.push(lowercaseAlphabetArray[i]);
    }
    for (i = 0; i < specialCharacterArray.length; i++) {
      finalArray.push(specialCharacterArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("uppercase lowercase special");

  }
  //16 ulns
  else if (uppercase && lowercase && numbers && specialCharacters) {
    for (i = 0; i < uppercaseAlphabetArray.length; i++) {
      finalArray.push(uppercaseAlphabetArray[i]);
    }
    for (i = 0; i < lowercaseAlphabetArray.length; i++) {
      finalArray.push(lowercaseAlphabetArray[i]);
    }
    for (i = 0; i < numberArray.length; i++) {
      finalArray.push(numberArray[i]);
    }
    for (i = 0; i < specialCharacterArray.length; i++) {
      finalArray.push(specialCharacterArray[i]);
    }
    console.log("final array length " + finalArray.length);

    console.log("uppercase lowercase number special");

  }
  console.log(finalArray);
  arrayFunction(finalArray);
}

function arrayFunction(finalArray) {
  console.log(finalArray);
  passwordFunction(finalArray);
}

function passwordFunction(finalArray) {
  for (i = 0; i < numberOfCharacters; i++) {
    var randomIndex = Math.floor(Math.random()*finalArray.length);
    password.push(finalArray[randomIndex]);
    console.log(i);
  }
  console.log(password);
  
  joinedPassword = password.join("");
  console.log(joinedPassword);
  generatePasswordForUser(joinedPassword);
  // console.log(password);
  // console.log(numberOfCharacters);
}

function generatePasswordForUser(joinedPassword) {
  document.getElementById("password").innerHTML = joinedPassword;
}



//  var characters = getElementById("numberOfCharacters").value;
// var numberOfCharacters = parseInt(characters);
// var password = new Array(numberOfCharacters);
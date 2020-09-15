var lowercaseAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseAlphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberArray = "0123456789".split("");
var specialCharacterArray = "~!@#$%^&*()-_=+[{]}:;|".split("");
var arrayOfArrays = [uppercaseAlphabetArray, lowercaseAlphabetArray, numberArray, specialCharacterArray];
var numberOfCharacters;
var finalArray;
var password;    
var uppercase;
var lowercase;
var numbers;
var specialCharacters;
const MIN_NUMBER_OF_CHARACTERS = 8;
const MAX_NUMBER_OF_CHARACTERS = 128;
var storedPassArray = new Array();


function numberOfCharacterCheck() {
    var characters = document.getElementById("numberOfCharacters").value;
    if(characters == "") {
        alert("Must choose the number of characters you wish your password to be");
    }
    else if (characters < MIN_NUMBER_OF_CHARACTERS || characters > MAX_NUMBER_OF_CHARACTERS) {
        alert("Must choose a number between 8 and 128 inclusive");
    }
    else {
        numberOfCharacters = parseInt(characters);
        criteriaCheck();
    }
}

function criteriaCheck() {
    uppercase = document.getElementById("uppercase").checked;
    lowercase = document.getElementById("lowercase").checked;
    numbers = document.getElementById("number").checked;
    specialCharacters = document.getElementById("specialCharacter").checked;

    if(!uppercase && !lowercase && !numbers && !specialCharacters) {
        alert("Must pick at least one of the checkboxes to generate your password");
    }
    else {
        finalArray = new Array();

        passwordCriteriaFunction();
    }
}

function passwordCriteriaFunction() {
    if(uppercase) {
        finalArrayFunction(uppercaseAlphabetArray);
    }
    if(lowercase) {
        finalArrayFunction(lowercaseAlphabetArray);
    }
    if(numbers) {
        finalArrayFunction(numberArray);
    }
    if(specialCharacters) {
        finalArrayFunction(specialCharacterArray);
    }
    // console.log(finalArray);
    // console.log(numberOfCharacters);
    passwordGenerationFunction();
}

function finalArrayFunction(array) {
    // for (i = 0; i < array.length; i++) {
        finalArray = finalArray.concat(array)
    // }
    // console.log(finalArray);
    // return finalArray;
}

function passwordGenerationFunction() {
    // console.log(finalArray);
    password = new Array();
    for (i=0; i<numberOfCharacters; i++) {
        password.push(finalArray[Math.floor(Math.random() * finalArray.length)]);
    }
    // console.log("first password array " + password);
    passwordValidationFunction();
    // console.log("second password array " + password);
    generatePasswordForUser();
}

function passwordValidationFunction() {
    var uppercaseIncluded;
    var lowercaseIncluded;
    var numbersIncluded;
    var specialCharactersIncluded;
    if(uppercase) {
        // console.log("checking uppercase " + uppercaseIncluded);
        for (i=0; i<password.length && !uppercaseIncluded; i++) {
            uppercaseIncluded = uppercaseAlphabetArray.includes(password[i]);
            if(uppercaseIncluded) {
                var upperRandomIndex = i;
                // console.log("upperRandomIndex " + upperRandomIndex);
            }
        }
        if(!uppercaseIncluded) {
            // console.log("still no uppercase " + uppercaseIncluded);
            var upperRandomIndex = Math.floor(Math.random() * password.length);
            var randomUppercaseLetter = uppercaseAlphabetArray[Math.floor(Math.random() * uppercaseAlphabetArray.length)];
            password.splice(upperRandomIndex,1,randomUppercaseLetter);
            // console.log("upperRandomIndex " + upperRandomIndex);
        }
    }
    if(lowercase) {
        // console.log("checking lowercase " + lowercaseIncluded);
        for (i=0; i<password.length && !lowercaseIncluded; i++) {
            lowercaseIncluded = lowercaseAlphabetArray.includes(password[i]);
            if(lowercaseIncluded) {
                var lowerRandomIndex = i;
                // console.log("lowerRandomIndex " + lowerRandomIndex);
            }
        }
        if(!lowercaseIncluded) {
            // console.log("still no lowercase " + lowercaseIncluded);
            var lowerRandomIndex = Math.floor(Math.random() * password.length);
            while(lowerRandomIndex == upperRandomIndex) {
                lowerRandomIndex = Math.floor(Math.random() * password.length);
            }
            var randomLowercaseLetter = lowercaseAlphabetArray[Math.floor(Math.random() * lowercaseAlphabetArray.length)];
            password.splice(lowerRandomIndex,1,randomLowercaseLetter);
            // console.log("lowerRandomIndex " + lowerRandomIndex);
        }
    }
    if(numbers) {
        // console.log("checking numbers " + numbersIncluded);
        for (i=0; i<password.length && !numbersIncluded; i++) {
            numbersIncluded = numberArray.includes(password[i]);
            if(numbersIncluded) {
                var numberRandomIndex = i;
                // console.log("numberRandomIndex " + numberRandomIndex);
            }
        }
        if(!numbersIncluded) {
            // console.log("still no numbers " + numbersIncluded);
            var numberRandomIndex = Math.floor(Math.random() * password.length);
            while(numberRandomIndex == upperRandomIndex || numberRandomIndex == lowerRandomIndex) {
                numberRandomIndex = Math.floor(Math.random() * password.length);
            }
            var randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
            password.splice(numberRandomIndex,1,randomNumber);
            // console.log("numberRandomIndex " + numberRandomIndex);
        }
    }
    if(specialCharacters) {
        // console.log("checking special characters " + specialCharactersIncluded);
        for (i=0; i<password.length && !specialCharactersIncluded; i++) {
            specialCharactersIncluded = specialCharacterArray.includes(password[i]);
            if(specialCharactersIncluded) {
                var specialCharacterRandomIndex = i;
                // console.log("specialCharacterRandomIndex " + specialCharacterRandomIndex);
            }
        }
        if(!specialCharactersIncluded) {
            // console.log("still no special characters " + specialCharactersIncluded);
            var specialCharacterRandomIndex = Math.floor(Math.random() * password.length);
            while(specialCharacterRandomIndex == upperRandomIndex || specialCharacterRandomIndex == lowerRandomIndex || specialCharacterRandomIndex == numberRandomIndex) {
                specialCharacterRandomIndex = Math.floor(Math.random() * password.length);
            }
            var randomSpecialCharacter = specialCharacterArray[Math.floor(Math.random() * specialCharacterArray.length)];
            password.splice(specialCharacterRandomIndex,1,randomSpecialCharacter);
            // console.log("specialCharacterRandomIndex " + specialCharacterRandomIndex);
        }
    }
}

function generatePasswordForUser() {
    document.getElementById("password").innerHTML = password.join("");
    // var lastPass = password;
    // previousPasswordFunction();
}


// previous password function variables
var generate = document.getElementById("generate");
var clickcount = 0;
var prevPass = document.getElementById("prevPass");
var nextPass = document.getElementById("nextPass");
var totalPasswordArray = new Array();
// var totalPasswordArrayReverse = totalPasswordArray.splice().reverse();
// totalPasswordArray.reverse();
// var totalNumberOfPasswords = 0;
var totalPasswordArrayIndex;
// localStorage.setItem("storedPasswords", totalPasswordArray);

generate.addEventListener("click",function() {
    if(password) {
    totalPasswordArray.push(password);
    totalPasswordArrayIndex = totalPasswordArray.length - 1;
    console.log(totalPasswordArrayIndex);
    prevPass.style.visibility = "visible";
    nextPass.disabled = true;
    document.getElementById("copyPassword").style.visibility = "visible";
    }
});

// previous password function 
prevPass.addEventListener("click", function() {
    nextPass.disabled = false;
    totalPasswordArrayIndex--;

    if(totalPasswordArrayIndex < 0) {
        alert("went through all passwords");
        totalPasswordArrayIndex = totalPasswordArray.length - 1;
    }
    else {document.getElementById("nextPass").style.visibility = "visible";}

    document.getElementById("password").innerHTML = totalPasswordArray[totalPasswordArrayIndex].join("");
    console.log(totalPasswordArrayIndex);
    console.log(totalPasswordArray);
});

// next password function
nextPass.addEventListener("click", function() {

    totalPasswordArrayIndex++;

    if(totalPasswordArrayIndex == totalPasswordArray.length) {
        alert("went through all passwords");
        totalPasswordArrayIndex = 0;
        // document.getElementById("password").innerHTML = totalPasswordArray[totalPasswordArrayIndex];
    }

    document.getElementById("password").innerHTML = totalPasswordArray[totalPasswordArrayIndex].join("");
    console.log(totalPasswordArrayIndex);
    console.log(totalPasswordArray);

});


// // storing password function
// var storePassBtn = document.getElementById("storePasswordBtn");
// var printStoredPasswords = document.getElementById("printPass");
// var storedPassArrayIndex = 0;
// // console.log(storedPassArrayIndex);
// var numberOfStoredPasswords = 0;

// function storePasswordFunction() {
//     numberOfStoredPasswords++;
//     storePassBtn.textContent = "You have stored " + numberOfStoredPasswords + " password(s)";
//     localStorage.setItem("password", password.join(""));
//     storedPassArray.push(localStorage.getItem("password"));
//     localStorage.setItem("storedPasswords", storedPassArray);
// }

// // print stored passwords
// printStoredPasswords.addEventListener("click", function() {
//     if (storedPassArrayIndex > storedPassArray.length - 1) {
//         storedPassArrayIndex = 0;
//         alert("You have gone through all of your stored passwords");
//         document.getElementById("password").innerHTML = storedPassArrayIndex + 1 + ") " + storedPassArray[storedPassArrayIndex];
//         storedPassArrayIndex++;
//     }
//     else {
//         document.getElementById("password").innerHTML = storedPassArrayIndex + 1 + ") " + storedPassArray[storedPassArrayIndex];
//         storedPassArrayIndex++;
//     }
// });

// copy password to clipboard
function copyPasswordFunction() {
    var copyPassword = document.getElementById("password");
    copyPassword.select();
    document.execCommand("copy");
}
# passwordGenerator
Homework 3

## What is passwordGenerator
The purpose of this program is to take user input and based on that randomly generate a password that the user can then use for whatever they intended to use it for.  Since the passwordGenerator is random the strength of the passwords that it creates are much higher than that of normal passwords that people put together (such as a birthday).

## Run through of program

1. ### Password criteria
The user is asked to input the number of characters they wish their password to be as long as that number is between 8 and 128 inclusive.  If the user skips this portion and tries to generate a password an alert will pop up informing the user that a number of characters is required.  Under the length number input box the user also has 4 options of password criteria to choose from.  They can pick from any combination of these criteria as long as at least one is selected.  If they try to continue without picking one an alert will appear telling them that they must pick at least one before they continue.

2. ### Generate Password
Once all the criteria sections have been filled out properly the user can then click on the big red `Generate Password` button.  When this button is pressed several things happen in the background (explained later) however 3 new things appear on the screen.  First and foremost is the randomly generated password with at least 1 character of each criteria that has been picked.  To ensure that things would not be missing from the generated password just by chance, I run through the password array.  If anything from the selected criteria is missing the computer will pick a random index within the password array and add a random character of the missing criteria into the password.  It does this for each criteria that happens to be missing and makes sure that important characters do not get overwritten.  All this happens in a function called `passwordValidationFunction()` and will continue until at least 1 character of each required criteria is added to the password.  However, the function will *only* run if something happens to be missing. 

### Extra buttons
The other 2 things that appear once the Generate Password button has been pressed are a left arrow button and a copy to clipboard button.  All extra buttons that appear have tooltips within their code, so if you hover your mouse over them a tiny message will appear next to your cursor telling you what it does.

### Previous Button (Left arrow button)
Every password that is generated is added to an array that empties everytime the page is refreshed.  There is no limit to the number of passwords that are added to the array so a user can create multiple passwords and click the previous password button to go back and view all the passwords that they have made.  When the previous button is pressed another button appears to the right which is called the next button.  This button works similarly to the previous button but instead allows you to go forward within the list of saved passwords (does not creat new password).  Once the user has reached the end of the list of stored passwords an alert informs them that they have viewed all created passwords and brings them back to either the most current password in the list or oldest password in the list depending on if they are pressing the previous button or next button respectively. 

### Copy to Clipboard Button
This button is pretty self explanatory.  Upon clicking this button the displayed password is automatically copied to the users clipboard so they are able to take it somewhere else and paste it.

## Link to GitHub Pages for this site:
https://14raryana.github.io/passwordGenerator/
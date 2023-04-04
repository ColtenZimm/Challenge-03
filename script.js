// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  let passwordLength = 0;
  let includeLowercase = false;
  let includeUppercase = false;
  let includeNumeric = false;
  let includeSpecial = false;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("How many characters would you like your password to be (between 8 and 128)?"));
  }

  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    includeLowercase = confirm("Would you like to include lowercase letters?");
    includeUppercase = confirm("Would you like to include uppercase letters?");
    includeNumeric = confirm("Would you like to include numeric characters?");
    includeSpecial = confirm("Would you like to include special characters?");
  }
  if (isNaN(passwordLength)) {
    alert("Invalid input. Password length must be a number between 8 and 128.");
    return "";
  }
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("Invalid input. You must select at least one character type.");
    return "";
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  let availableChars = "";
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeNumeric) {
    availableChars += numericChars;
  }
  if (includeSpecial) {
    availableChars += specialChars;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
  }

  return password;
}
document.getElementById("generate-password-btn").addEventListener("click", function () {
  var password = generatePassword();
  alert("Your new password is: " + password);
});


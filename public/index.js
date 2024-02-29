const Numbers = "1234567890";
const Lowercase = "abcdefghijklmnopqrstuvwxyz";
const Uppercase = Lowercase.toUpperCase();
const Symbols = "!@#$%^&*()_+`";
const passwordLength = document.getElementById("passwordLength");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const password = document.getElementById("password");

function generatePassword() {
  let includes = "",
    generated = "";
  includes += includeLowercase.checked ? Lowercase : "";
  includes += includeUppercase.checked ? Uppercase : "";
  includes += includeSymbols.checked ? Symbols : "";
  includes += includeNumbers.checked ? Numbers : "";
  for (let i = 0; i < passwordLength.value; i++) {
    generated += includes.charAt(Math.random() * includes.length + 1);
  }
  password.value = generated;
}

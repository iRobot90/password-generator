const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symbols = "!@#$%^&*()_+";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
    if (passwordBox.value) {
      passwordBox.select();
      try {
        navigator.clipboard.writeText(passwordBox.value).then(function() {
          console.log('Password copied to clipboard');
        }).catch(function(err) {
          console.error('Unable to copy password:', err);
        });
      } catch (err) {
        console.error('Unable to copy password:', err);
      }
    } else {
      console.error('Password box element not found');
    }
  }
  
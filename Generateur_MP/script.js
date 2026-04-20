const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

// ensembles de caractères
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=<>?/";

function getRandom(charset) {
  return charset[Math.floor(Math.random() * charset.length)];
}

function generatePassword() {
  let charset = lower;

  if (uppercaseEl.checked) charset += upper;
  if (numbersEl.checked) charset += numbers;
  if (symbolsEl.checked) charset += symbols;

  let password = "";
  const length = parseInt(lengthInput.value);

  for (let i = 0; i < length; i++) {
    password += getRandom(charset);
  }

  passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

// copier le mot de passe
copyBtn.addEventListener("click", () => {
  passwordInput.select();
  document.execCommand("copy");
  alert("Mot de passe copié !");
});
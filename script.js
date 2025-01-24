// Generar un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
const checkBtn = document.getElementById("checkBtn");
const inputNumber = document.getElementById("guess");
const resetBtn = document.getElementById("resetBtn");
let won = false;
let attempts = 0;

checkBtn.addEventListener("click", () => {
  checkNumber();
});

inputNumber.addEventListener("keypress", (e) => {
  const keyPress = e.key;
  if (keyPress === "Enter" && !won) {
    checkNumber();
  }
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

function checkNumber() {
  const userGuess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  attempts++;
  attemptsDisplay.textContent = `Intentos: ${attempts}`;

  if (userGuess === randomNumber) {
    message.textContent = "¡Correcto! 🎉 Adivinaste el número.";
    message.className = "success";
    checkBtn.style.display = "none";
    resetBtn.style.display = "inline";
    won = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Muy bajo. Intenta con un número más grande.";
    message.className = "error";
  } else {
    message.textContent = "Muy alto. Intenta con un número más pequeño.";
    message.className = "error";
  }
}

const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultParagraph = document.getElementById("result");

function checkInput() {
  const rawValue = userInput.value.trim();

  if (rawValue === "" || Number.isNaN(Number(rawValue))) {
    resultParagraph.textContent = "Please enter a valid number!";
  } else {
    const num = Number(rawValue);

    if (num < 10) {
      resultParagraph.textContent = "The number is lower than 10";
    } else if (num > 10) {
      resultParagraph.textContent = "The number is higher than 10";
    } else {
      resultParagraph.textContent = "The number is equal to 10";
    }
  }
}

checkBtn.addEventListener("click", checkInput);
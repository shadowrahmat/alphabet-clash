function hideElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function getTextElementValueById(elementId) {
  let element = document.getElementById(elementId);
  let elementValueText = element.innerText;
  let value = parseInt(elementValueText);
  return value;
}

function setTextElementById(elementId, value) {
  let element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextByIdAlpabet(element) {
  let elementAlphabet = document.getElementById(element);
  let text = elementAlphabet.innerText;
  return text;
}
function removeBackgroundColorById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getARandomAlphabet() {
  let alphabetString = "abcdefghijklmnopqrstuvwxyz";
  let alphabets = alphabetString.split("");

  let randomNumber = Math.random() * 25;
  let index = Math.round(randomNumber);

  let alphabet = alphabets[index];
  return alphabet;
}

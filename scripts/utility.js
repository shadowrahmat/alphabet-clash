function hideElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

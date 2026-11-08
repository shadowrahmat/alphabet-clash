// function play() {
//   // Step 1----

//   let homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // console.log(homeSection.classList);

//   // Step 2  ------>   Show the playground section

//   let playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
//   // console.log(playGroundSection.classList);
// }

// function handleKeyboardButtonPress() {
//   console.log("button pressed");
// }

// // capture keyboard key press event.........
// document.addEventListener("keyup", handleKeyboardButtonPress);

// function handleKeyboardKeyUpEvent(event) {
//   let playerPressedKey = event.key;
//   console.log("Player pressed key is:", playerPressedKey);

//   // get the expected to press key from the screen....
//   let currentAlphabetElement = document.getElementById("current-alphabet");
//   let currentAlphabet = currentAlphabetElement.innerText;
//   let expectedAlphabet = currentAlphabet.toLowerCase();
//   console.log(playerPressedKey, expectedAlphabet);
//   // console.log(currentAlphabetElement.innerText);

//   // check match or not.....

//   if (playerPressedKey === expectedAlphabet) {
//     console.log("Player pressed the correct key, player get a point");
//   } else {
//     console.log("Player pressed the wrong key, player lost a point");
//   }
// }

function handleKeyboardKeyUpEvent(event) {
  let playerPressedKey = event.key;
  console.log("player pressed", playerPressedKey);

  // stop the game if pressed 'esc'...
  if (playerPressedKey == "Escape") {
    gameOver();
  }

  // key player is expected to press........
  let currentAlphabetElement = document.getElementById("current-alphabet");
  let currentAlphabet = currentAlphabetElement.innerText;
  let expectedAlphabet = currentAlphabet.toLowerCase();

  // Check right or wrong key press........
  if (playerPressedKey === expectedAlphabet) {
    console.log("You got a point");
    let currentScore = getTextElementValueById("current-score");
    console.log(currentScore);
    const updateScore = currentScore + 1;
    setTextElementById("current-score", updateScore);
    //........................................................................

    // console.log("Player pressed the correct key, player get a point");
    // console.log("You have pressed correctly", expectedAlphabet);

    // update the score of the player........
    // 1. get the current score.....

    // let currentScoreElement = document.getElementById("current-score");
    // let currentScoreText = currentScoreElement.innerText;
    // let currentScore = parseInt(currentScoreText);

    // const currentScore = getTextElementValueById("currentScore");
    // console.log(currentScore);
    // let newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
    // start a new round of the game........
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("Player pressed the wrong key, player lost a point");
    let currentLife = getTextElementValueById("current-life");
    let updateLife = currentLife - 1;
    setTextElementById("current-life", updateLife);

    if (updateLife === 0) {
      gameOver();
    }

    //.....................................
    // // step 1: get the current life number
    // let currentLifeElement = document.getElementById("current-life");
    // let currentLifeText = currentLifeElement.innerText;
    // let currentLife = parseInt(currentLifeText);

    // // step 2: reduce the life count
    // let newLife = currentLife - 1;
    // // step 3: display the update life count
    // currentLifeElement.innerText = newLife;
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  let alphabet = getARandomAlphabet();
  console.log("Your alphabet is:", alphabet);

  // set randomly generated alphabet to the screen....

  let currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  // Reset score and life......
  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // update final score....
  // 1. get the final score........
  let lastScore = getTextElementValueById("current-score");
  console.log(lastScore);
  setTextElementById("game-score", lastScore);

  // Clear the last selected alphabet....

  let currentAlphabet = getElementTextByIdAlpabet("current-alphabet");
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}

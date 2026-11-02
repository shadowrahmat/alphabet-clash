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

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
}

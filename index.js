const numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const drumLetter = this.innerHTML;
    drumSound(drumLetter);
    styleDrum(drumLetter);
  });
}

document.addEventListener("keydown", function (event) {
  drumSound(event.key);
  styleDrum(event.key);
});

function drumSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      const kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log("default");
      break;
  }
}

function styleDrum(currentDrum) {
  const activeDrum = document.querySelector("." + currentDrum);
  activeDrum.classList.add("pressed");

  setTimeout(function () {
    activeDrum.classList.remove("pressed");
  }, 100);
}

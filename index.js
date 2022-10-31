var fartButton = document.getElementById("fard");
var fartCountElement = document.getElementById("count");

var fartCount = 0;
var sound = true;
var fartSounds = [
  new Audio("./sound/lfard.mp3")
];

fartButton.addEventListener("click", () => {
  fartCount++;
  fartCountElement.innerHTML = `Haha, you fell for it ${fartCount} times`;
  if(sound){
    fartSounds[0].play();
  }
});

let fartButton = document.getElementById("fard");
let fartCountElement = document.getElementById("count");

let fartCount = 0;
let sound = true;
let fartSounds = [
  new Audio("../sound/lfard.mp3")
];

fartButton.addEventListener("click", () => {
  fartCount++;
  fartCountElement.innerHTML = "Haha, you fell for it ${fartCount} times";
  if(sound){
    
  }
});

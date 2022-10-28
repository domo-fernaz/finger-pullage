let fartButton = document.getElementById("fard");
let fartCountElement = document.getElementById("count");

let fartCount = 0;
let sound = true;

fartButton.addEventListener("click", () => {
  fartCount++;
  fartCountElement.innerHTML = "Haha, you fell for it ${fartCount} times";
  if(sound){
    
  }
});

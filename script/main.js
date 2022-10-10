let fartButton = document.getElementById("fard");
let fartCount = document.getElementById("count");

let times = 0;
let sound = true;

fartButton.onClick = function() {
  times++;
  fartCount.innerHTML = "Haha, you fell for it ${times} times"
  if(sound){
    
  }
};

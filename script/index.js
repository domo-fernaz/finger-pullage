let fartButton = document.getElementById("fard");

/*let fartCountElement = document.getElementById("count");

let fartCount = 0;
let sound = true;
let fartSounds = [
  new Audio("./sound/lfard.mp3")
];*/

let extras = document.getElementById("extras");
let txt = document.createTextNode("Fard");

fartButton.addEventListener("click", () => {
  extras.appendChild(txt);
});

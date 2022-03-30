let btn = document.getElementById("fard");
let countElement = document.getElementById("count");
let count = 0;

btn.onClick = function() {
  count++;
  countElement.innerHTML = `You fell for it ${count} times`;
}

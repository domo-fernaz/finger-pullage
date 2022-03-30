let btn = document.getElementById("fard");
let countElement = document.getElementById("count");
let count = 0;

btn.onclick = function() {
  count++;
  alert("*fart*");
  countElement.innerHTML = `You fell for it ${count} times`;
}

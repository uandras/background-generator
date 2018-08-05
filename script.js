var _ = require("lodash");

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Answer: ", _.without(array, 3));

var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var randbtn = document.getElementsByClassName("randcols")[0];
// vagy így is lehet class alapján kiválasztani, ha van style:
//var color1=document.querySelector(".color1");
//var color2=document.querySelector(".color2");

color1.addEventListener("input", changeColor);
// hint: több event listener is adható egy elemhez
color2.addEventListener("input", changeColor);
randbtn.addEventListener("click", randomizeColors);

console.log(color1.value);
gradArray = window
  .getComputedStyle(document.body, null)
  .backgroundImage.split(",");
gradColor1 = gradArray[1].trim();
gradColor2 = gradArray[2].substr(0, gradArray[2].length - 1).trim();
console.log(gradArray);
console.log(gradColor1);
console.log(gradColor2);
color1.value = convertColor(gradColor1);
color2.value = convertColor(gradColor2);

function changeColor(event) {
  console.log(event.target.value);
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

//because color.value needs #rrggbb format
function convertColor(cname) {
  switch (cname) {
    case (cname = "red"):
      return "#ff0000";
      break;
    case (cname = "yellow"):
      return "#ffff00";
      break;
    default:
      return cname;
  }
}

function getRandomColor() {
  var r = Math.floor(255 * Math.random());
  var g = Math.floor(255 * Math.random());
  var b = Math.floor(255 * Math.random());
  var colval =
    "#" +
    ("0" + r.toString(16)).slice(-2) +
    ("0" + g.toString(16)).slice(-2) +
    ("0" + b.toString(16)).slice(-2);
  return colval;
}

function randomizeColors() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

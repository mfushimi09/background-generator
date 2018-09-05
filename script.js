var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value
        +", " 
        + color2.value 
        + ")";

        css.textContent = body.style.background +";";
}

function getRandomRGBColor() {
    //return random rgb color in HEX
    //e.g. #43cd1f

    var res =  "#";
    for (let i of [0, 1, 2]) { 
        res += ("0" + (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString(16)).slice(-2);
    }
    // console.log(res);

    return res;
}

function setRandomGradient() {
    color1.value = getRandomRGBColor();
    color2.value = getRandomRGBColor();
    setGradient();
}


color1.addEventListener("input", setGradient); 
color2.addEventListener("input", setGradient);
window.onload = setGradient;

random.addEventListener("click", setRandomGradient);
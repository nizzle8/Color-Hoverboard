const container = document.getElementById("container");
const defaultBtn = document.getElementById("default");
const pastelBtn = document.getElementById("pastel");
let colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const pastelColors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#fffffc'];
const SQUARES = 500;

pastelBtn.addEventListener("click", () => {
    if(!pastelBtn.classList.contains("active")) {
        pastelBtn.classList.add("active");
    }
});

defaultBtn.addEventListener("click", () => {
    if(pastelBtn.classList.contains("active")) {
        pastelBtn.classList.remove("active");
    }
});

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    let color;
    if(pastelBtn.classList.contains("active")){
        color = getPastelColor();
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    } else {
        color = getRandomColor();
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }
}

function removeColor(element) {
    element.style.background = `#1d1d1d`;
    element.style.boxShadow = `0 0 2px rgb(0,0,0)`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getPastelColor() {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}
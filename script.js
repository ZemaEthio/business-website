// script.js

function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FF8333"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

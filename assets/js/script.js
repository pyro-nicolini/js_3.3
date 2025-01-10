const ele = document.getElementById("ele1")
ele.addEventListener("click", () => pintar(ele, 'yellow'));

ele.style.backgroundColor = "green";

function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}
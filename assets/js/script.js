//Este archivo de JS lo comparto en pintar.html y 4_colores.html

function pintar(elemento, color = "green") { // declaro la function con elemento, color y color por defecto en verde.
        elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

if (ele) {
    pintar(ele)
    ele.addEventListener("click", (e) => pintar(e.target, 'yellow'))
} 


/* ejercicio 4_colores.html */ 
const color1 = document.getElementById('id1');
const color2 = document.getElementById("id2");
const color3 = document.getElementById("id3");
const color4 = document.getElementById("id4");


if (color1 && color2 && color3 && color4) {  // valido sí existen mis elementos en el html, para evitar errores en mi página 1 y re-utilizó la función pintar
    color1.addEventListener("click", () => pintar(color1, "black"));
    color2.addEventListener("click", () => pintar(color2, "black"));
    color3.addEventListener("click", () => pintar(color3, "black"));
    color4.addEventListener("click", () => pintar(color4, "black"));
}    
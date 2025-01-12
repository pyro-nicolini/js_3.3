//este archivo se comparte en 2 páginas html.

/* ejercicio pintar.html */
const ele = document.getElementById("ele1")
function pintar(elemento, color) {
   elemento.style.backgroundColor = color;
}

if (ele) { // valido sí existe en el html
    ele.style.backgroundColor = "green";
    ele.addEventListener("click", (e) => pintar(e.target, 'yellow'));
}


/* ejercicio 4_colores.html */ 
const color1 = document.getElementById('id1');
const color2 = document.getElementById("id2");
const color3 = document.getElementById("id3");
const color4 = document.getElementById("id4");

if (color1 && color2 && color3 && color4) {  // valido sí existe en el html, para evitar errores y re-utilizó la función pintar
    color1.addEventListener("click", () => pintar(color1, "black"));
    color2.addEventListener("click", () => pintar(color2, "black"));
    color3.addEventListener("click", () => pintar(color3, "black"));
    color4.addEventListener("click", () => pintar(color4, "black"));
}    
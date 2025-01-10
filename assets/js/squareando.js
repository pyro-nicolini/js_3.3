let square = document.querySelector("#key");
let variableColor = "";  // aquí guardaré el color de forma Global

// Coloreanding
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    variableColor = "#FF69B4";                                  // rosado
  } else if (event.key === "s" || event.key === "S") {
    variableColor = "#FF4500";                                  // naranjo
  } else if (event.key === "d" || event.key === "D") {
    variableColor = "#00BFFF";                                  // celeste
  }
  square.style.backgroundColor = variableColor;
});

// Creando nuevos squares
function creandoSquares(color) {
  const nuevoSquare = document.createElement("div");
  nuevoSquare.style.backgroundColor = color;
  nuevoSquare.classList = ('square');
  document.body.appendChild(nuevoSquare);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    creandoSquares("#800080");                                  //morado
  } else if (event.key === "w" || event.key === "W") {
    creandoSquares("#808080");                                  //gris
  } else if (event.key === "e" || event.key === "E") {
    creandoSquares("#6B3F2A");                                  //café  
    }
});

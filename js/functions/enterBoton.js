
//Evento Enter boton

function enterBoton() {
  document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      convertirMoneda(resultadoAlerta);
    }
  });
}


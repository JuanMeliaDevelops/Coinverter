//      Evento solo numeros

function validaNumeros(event) {

  if ((event.charCode >= 48 && event.charCode <= 57 && moneda1.value.length < 10) || event.key === '.') {
    return true;
  }
  else {
    return false;
  }
}


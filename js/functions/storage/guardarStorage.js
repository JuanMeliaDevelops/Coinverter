
/* Storage */

const listaHistorial = [];

/* Fecha y hora */
function queHoraEs() {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const horas = fechaActual.getHours();

  let minutos = fechaActual.getMinutes();
  minutos = minutos.toString().padStart(2, '0');

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const mesNum = fechaActual.getMonth();
  const mes = meses[mesNum];

  return {
    dia,
    mes,
    horas,
    minutos
  };
}


/* crear objeto del cambio realizado */
function cambioStorage(moneda1, moneda2, cantidad, resultado, fecha) {
  this.moneda1 = moneda1;
  this.moneda2 = moneda2;
  this.cantidad = cantidad;
  this.resultado = resultado;
  this.fecha = fecha;
}


function guardarStorage(valorMoneda1, resultadoOficial, selectMoneda1, selectMoneda2) {

  const { dia, mes, horas, minutos } = queHoraEs();
  const fechaHoraString = `${dia} de ${mes} a las ${horas}:${minutos}`;

  const cambio = new cambioStorage(
    selectMoneda1,
    selectMoneda2,
    valorMoneda1,
    resultadoOficial,
    fechaHoraString
  );

  const listaHistorial = JSON.parse(localStorage.getItem('storageJson')) || [];
  listaHistorial.unshift(cambio);
  listaStorageJson = JSON.stringify(listaHistorial);
  localStorage.setItem('storageJson', listaStorageJson);

};


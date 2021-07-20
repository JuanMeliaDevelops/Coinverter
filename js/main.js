const moneda1 = document.getElementById("moneda1");
const moneda2 = document.getElementById("moneda2");




// Creador de Monedas Objetos
function moneda(id, nombreMoneda, iso, origen, simbolo, precioPesos) {
  this.id = id;
  this.nombreMoneda = nombreMoneda;
  this.iso = iso;
  this.origen = origen;
  this.simbolo = simbolo;
  this.precioPesos = precioPesos;
};

const pesoArgentino = new moneda('1', 'Peso Argentino', 'ARS', 'Argentina', '$', '1');
const euro = new moneda('2', 'Euro', 'EUR', 'Europa', '€', '115.4');
const libra = new moneda('3', 'Libra Esterlina', 'GBP', 'Reino Unido', '£', '133.23');
const yen = new moneda('4', 'Yen Japones', 'JPY', 'Japon', '¥', '0.87');
const bitcoin = new moneda('5', 'Bitcoin', 'BTC', 'Virtual', '₿', '3580214.02');
const dolarBlue = new moneda('6', 'Dolar Blue', 'USD', 'Estados Unidos', '$', '177');




// Array de monedas 

const listaMonedas = [
  dolarBlue, euro, libra, yen, bitcoin, pesoArgentino,
];



// Funciones

function aparecerResultado() {

  let resultado = document.getElementById('resultado');
  resultado.innerText = moneda1.value + ' Pesos Argentinos = ' + moneda2.value + ' Dolar Blue';
  resultado.style.padding = '50px';
};


function cDolar() {
  let resultado = moneda1.value / dolarBlue.precioPesos;
  resultado = resultado.toFixed(2);
  moneda2.value = resultado;
  aparecerResultado();
  guardarStorage();
}




// EVENTOS


// Evento solo numeros

function validaNumeros(event) {
  if (event.charCode >= 48 && event.charCode <= 57) {
    return true;
  }
  return false;
}

//Evento Enter boton

function enterSend() {
  document.getElementById("moneda1").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      document.getElementById("boton").click();
      return false;
    }
  })
};


// Animacion 

$("#logo1").on("mouseover", function () {
  $("#logo1").addClass("animate__animated animate__swing").delay(1300).queue(function(remover){
    $(this).removeClass("animate__animated animate__swing");
    remover();
  });
  
});




// Api



// const datosApi =
//   $.ajax({
//     method: "GET",
//     url: 'http://data.fixer.io/api/latest?access_key=f1eb0dca9efe37da6d347582f5fffa29',
//     success: function (respuesta) {
//       console.log(respuesta);
//       console.log(respuesta.rates.ARS);
//       console.log(respuesta.rates.USD);


//       $('#boton').click(function () {
//         let resultado1 = moneda1.value / respuesta.rates.ARS;
//         let resultado = resultado1 / respuesta.rates.USD;
//         resultado = resultado.toFixed(2);

//         // $(`#resultado2`).text(moneda1.value + ' Pesos Argentinos = ' + resultado + ' Dolar API')

//         // console.log(`Pesos a dolar =` + resultado);


//       });


//     }
//   });














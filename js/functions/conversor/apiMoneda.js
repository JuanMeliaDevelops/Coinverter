

const selectMoneda1 = document.getElementById('selectMoneda1');
const selectMoneda2 = document.getElementById('selectMoneda2');

const valorMoneda1 = document.getElementById("moneda1").value;
const valorMoneda2 = document.getElementById("moneda2").value;

const resultadoAlerta = document.getElementById("resultado");



let dataSymbols; // Variable para almacenar los símbolos de las monedas
let dataRates;



function headSelect() {
    const usdOptionElement = document.createElement("option");
    usdOptionElement.value = "USD";
    usdOptionElement.text = "United States Dollar";
    usdOptionElement.classList.add("usd-option");


    const argOptionElement = document.createElement("option");
    argOptionElement.value = "ARS";
    argOptionElement.text = "Argentine Peso";
    argOptionElement.classList.add("ars-option");

    selectMoneda1.appendChild(usdOptionElement);
    selectMoneda2.appendChild(argOptionElement.cloneNode(true));
    selectMoneda1.appendChild(argOptionElement);
    selectMoneda2.appendChild(usdOptionElement.cloneNode(true));
};

headSelect();




/* API DOLAR OFICIAL, BLUE : 
   Documentacion: https://github.com/Castrogiovanni20/api-dolar-argentina
    https://api-dolar-argentina.herokuapp.com/ 
    O 
    https://dolarapi.com/docs/
    */

/* api en uso https://apilayer.com/marketplace/exchangerates_data-api*/


/* Keys de api :  7E0bzmrA1Vxv1hYkbUEg1xq7iDBUFI97   o   BXTMG1IkUyV7t6f7dYJZUWUrxgyl9GJT  */

async function cargarApi() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "7E0bzmrA1Vxv1hYkbUEg1xq7iDBUFI97");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try { 

/* API de Symbols (nombres de monedas) para el select */

const response1 = await fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions);
dataSymbols = await response1.json();

for (const key in dataSymbols.symbols) {
    const optionElement1 = document.createElement("option");
    optionElement1.value = key;
    optionElement1.text = dataSymbols.symbols[key];
    selectMoneda1.appendChild(optionElement1);

    const optionElement2 = document.createElement("option");
    optionElement2.value = key;
    optionElement2.text = dataSymbols.symbols[key];
    selectMoneda2.appendChild(optionElement2);

} 

/* Api de los valores de las monedas  */

   const response2 = await fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions);
   dataRates = await response2.json();

} catch (error) {

  resultadoAlerta.innerText = "Ha surgido un error, por favor inténtelo nuevamente más tarde";
}
}

cargarApi(); 




/* Probar esta query:
 
fetch("https://api.apilayer.com/exchangerates_data/convert?to=GBP&from=EUR&amount=800", requestOptions)
TO MONEDA 2, from MONEDA1 amount VALORMONEDA1


}

*/

function convertirMoneda() {

    const selectMoneda1 = document.getElementById('selectMoneda1').value;
    const selectMoneda2 = document.getElementById('selectMoneda2').value;

    const valorMoneda1 = document.getElementById("moneda1").value;
    const valorMoneda2 = document.getElementById("moneda2").value;

    if (selectMoneda1 == "monedaDefault" || selectMoneda2 == "monedaDefault") {

        resultadoAlerta.innerText = "Porfavor, seleccionar las monedas desea convertir.";
    }

    else if (valorMoneda1 == "") {

        resultadoAlerta.innerText = "Porfavor, indica la cantidad que desea convertir.";
    }

    else {

        const resultado = valorMoneda1 * 500;

        resultadoAlerta.innerText = `Son ${resultado} ${selectMoneda2}.`;

        document.getElementById("moneda2").value = resultado;

        guardarStorage(valorMoneda1, resultado, selectMoneda1, selectMoneda2);
        
    }




};

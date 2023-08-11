




async function convertirMoneda(resultadoAlerta) {



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

        try {
            const dataResultado = await apiConvert(selectMoneda2, selectMoneda1, valorMoneda1);
            console.log(dataResultado)
            const resultado = dataResultado.result;
            const resultadoOficial = parseFloat(resultado).toFixed(2);
            resultadoAlerta.innerText = `${resultadoOficial} ${selectMoneda2}`;
            document.getElementById("moneda2").value = resultadoOficial;

            guardarStorage(valorMoneda1, resultadoOficial, selectMoneda1, selectMoneda2);

        } catch (error) {
       /*      console.log(error);
            resultadoAlerta.innerText = "Ha surgido un error, por favor inténtelo nuevamente más tarde"; */
        }
    }

}




/* Keys de api :  7E0bzmrA1Vxv1hYkbUEg1xq7iDBUFI97   o   BXTMG1IkUyV7t6f7dYJZUWUrxgyl9GJT  */

async function apiConvert(selectMoneda2, selectMoneda1, valorMoneda1) {

    var myHeaders = new Headers();
    myHeaders.append("apikey", "7E0bzmrA1Vxv1hYkbUEg1xq7iDBUFI97");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

        const response2 = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${selectMoneda2}&from=${selectMoneda1}&amount=${valorMoneda1}`, requestOptions);
        const dataResultado = await response2.json();
        return dataResultado;

} 
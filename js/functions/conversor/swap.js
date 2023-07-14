

function swapMonedas() {

    const moneda1 = selectMoneda1.value;
    const moneda2 = selectMoneda2.value;

    const valorMoneda1 = document.getElementById("moneda1").value;
    const valorMoneda2 = document.getElementById("moneda2").value;

    selectMoneda2.value = moneda1;
    selectMoneda1.value = moneda2;

    document.getElementById("moneda1").value = valorMoneda2;
    document.getElementById("moneda2").value = valorMoneda1;


};

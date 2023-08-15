
function mostrarStorage() {

  const listaHistorialParse = JSON.parse(localStorage.getItem('storageJson'));

  console.log(listaHistorialParse);

  if (!listaHistorialParse) {
    $("#plantilla").append(`

    <div class="m-auto mt-5 align-content-center align-self-center">

    <h4>Aun no has realizado ninguna conversion.</h4>
    <div class="w-25 m-auto">
    <img class="w-25 " src="imgs/sadFace.png" alt="">
    </div>

    </div>
  




`)
  }
  else {

    for (let i = 0; i < Math.min(listaHistorialParse.length, 15); i++) {
      $('#plantillaCont').append(`
  
        <tr>
          <th scope="row">${i + 1}</th>
          <td id="">${listaHistorialParse[i].moneda1}</td>
          <td id="">${listaHistorialParse[i].cantidad}</td>
          <td id="">${listaHistorialParse[i].moneda2}</td>
          <td id="">${listaHistorialParse[i].resultado}</td>
          <td id="">${listaHistorialParse[i].fecha}</td>
        </tr>
   
    `);
    }

  }




};



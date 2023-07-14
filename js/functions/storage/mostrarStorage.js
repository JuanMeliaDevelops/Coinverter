
function mostrarStorage() {

  const listaHistorialParse = JSON.parse(localStorage.getItem('storageJson'));

  for (let i = 0; i < Math.min(listaHistorialParse.length, 10); i++) {
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

};



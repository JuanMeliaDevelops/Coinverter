// Storage
var listaHistorial = [];

function guardarStorage() {

  function monedaStorage(pesoArgentino, moneda, monedaCambio) {
    this.pesoArgentino = pesoArgentino;
    this.moneda = moneda;
    this.monedaCambio = monedaCambio;
  };

  const monedaStorage1 = new monedaStorage(
    moneda1.value,
    dolarBlue.nombreMoneda,
    moneda2.value,
  );

listaHistorial.push(monedaStorage1);

listaStorageJson = JSON.stringify(listaHistorial);
  localStorage.setItem('storageJson', listaStorageJson);

};

function mostrarStorage() {

  const listaHistorialParse = JSON.parse(localStorage.getItem('storageJson'));


  

  for (let index = 0; index < listaHistorialParse.length; index++) {
    $('#plantillaCont').append(`

      <tr>
        <th scope="row">${index + 1}</th>
        <td id="pesoArgentino">${listaHistorialParse[index].pesoArgentino}</td>
        <td id="moneda">${listaHistorialParse[index].moneda}</td>
        <td id="monedaCambio">${listaHistorialParse[index].monedaCambio}</td>
      </tr>
 
  
  
  `);
  }
 
};

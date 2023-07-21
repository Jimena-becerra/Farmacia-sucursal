let indexCliente; // es el índice del arreglo
let obj = []; // arreglo que se llenará de objetos JSON
  
var text = '{"cliente":[ ' +
  '{"nomC" : "Jesús","apaterno" : "Becerra", "amaterno" : "Rodríguez", "generoC" : "Hombre","nacimientoC" : "1950-07-26", "rfcC" : "BERJ500726F37","curpC" : "BERJ500726HGTCDS09", "telefonoC" : "4771654562", "domicilioC" : "Hacienda de echeveste","cpC" : "37100", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2020-03-13","emailC" : "Becerrajesus@gmail.com","foto": "H6.jpeg", "estatus" : "Activo"},'+
  '{"nomC" : "Lidia","apaterno" : "Torres", "amaterno" : "Gomez", "generoC" : "Mujer", "nacimientoC" : "1980-05-13", "rfcC" : "TOGL800513F30","curpC" : "TOGL800513MGTRMD26", "telefonoC" : "4779487834", "domicilioC" : "Delta de Jerez","cpC" : "37545", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2007-10-23","emailC" : "TorresLidia@gmail.com","foto": "M6.jpeg", "estatus" : "Activo"},'+
  '{"nomC" : "Estefania","apaterno" : "Lopez", "amaterno" : "Muñoz", "generoC" : "Mujer", "nacimientoC" : "1990-12-07", "rfcC" : "LOME901207F31","curpC" : "LOME901207MGTPÑS21", "telefonoC" : "4773780423", "domicilioC" : "Granjas Echeveste","cpC" : "37100", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2022-09-28","emailC" : "LopezEstefania@gmail.com","foto": "M7.jpeg", "estatus" : "Activo"},'+
  '{"nomC" : "Osvaldo","apaterno" : "Garcia", "amaterno" : "Hernandez", "generoC" : "Hombre", "nacimientoC" : "1989-04-20", "rfcC" : "GAHO890420F09","curpC" : "GAHO890420HGTRRS09", "telefonoC" : "4774698864", "domicilioC" : "Hacienda del Campestre","cpC" : "37170", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2018-02-27","emailC" : "GarciaOsvaldo@gmail.com","foto": "H7.jpeg", "estatus" : "Activo"},'+
  '{"nomC" : "Jimena","apaterno" : "Lopez", "amaterno" : "Rodríguez", "generoC" : "Mujer", "nacimientoC" : "1990-10-18", "rfcC" : "LORJ901018F33","curpC" : "LORJ901018MGTPDM17", "telefonoC" : "4772475598", "domicilioC" : "Jardines de la Presa","cpC" : "37109", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2016-08-16","emailC" : "LopezJimena@gmail.com","foto": "M8.jpeg", "estatus" : "Activo"},'+
  '{"nomC" : "Carlos","apaterno" : "Fernandez", "amaterno" : "Valadez", "generoC" : "Hombre", "nacimientoC" : "2003-03-23", "rfcC" : "FEVC030323F19","curpC" : "FEVC030323HGTRLR29", "telefonoC" : "4779874521", "domicilioC" : "La Condesa","cpC" : "37440", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2021-05-29","emailC" : "FernandezCarlos@gmail.com","foto": "H8.jpeg", "estatus" : "Activo"},'+
  '{"nomC" : "Denisse","apaterno" : "Palma", "amaterno" : "Ortiz", "generoC" : "Mujer", "nacimientoC" : "1999-02-02", "rfcC" : "PAOD990202F34","curpC" : "PAOD990202MGTLRN23", "telefonoC" : "4771139854", "domicilioC" : "Las Palmas","cpC" : "37425", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2018-04-01","emailC" : "PalmaDenisse@gmail.com","foto": "M9.jpeg", "estatus" : "Activo"},'+
  '{"nomC" : "Ivan","apaterno" : "Guadian", "amaterno" : "Muñoz", "generoC" : "Hombre", "nacimientoC" : "1997-07-13", "rfcC" : "GUMI970713F39","curpC" : "GUMI970713HGTDÑV39", "telefonoC" : "4776785989", "domicilioC" : "Las Quintas","cpC" : "37125", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2010-10-09","emailC" : "GuadianIvan@gmail.com","foto": "H9.jpeg", "estatus" : "Activo"},'+
  '{"nomC" : "María","apaterno" : "Moreno", "amaterno" : "Patlan", "generoC" : "Mujer", "nacimientoC" : "1987-10-28", "rfcC" : "MOPM871028F28","curpC" : "MOPM871028MGTRRTR27", "telefonoC" : "4774674432", "domicilioC" : "Parque Chapultepec","cpC" : "37295", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2014-12-17","emailC" : "MorenoMaria@gmail.com","foto": "M10.jpeg", "estatus" : "Activo"},'+
  '{"nomC" : "Jorge","apaterno" : "Rodríguez", "amaterno" : "Hernandez", "generoC" : "Hombre", "nacimientoC" : "1995-08-26", "rfcC" : "ROHJ950826F06", "curpC" : "ROHJ950826HGTDRR18", "telefonoC" : "4779837656", "domicilioC" : "Real 2000","cpC" : "37355", "ciudadC" : "León","estadoC" : "Guanajuato","registroC" : "2019-05-20","emailC" : "RodriguezJorge@gmail.com", "foto": "H10.jpeg", "estatus" : "Activo"} ] }'; 
  
obj = JSON.parse(text);
console.log(obj);
actualizaTabla();
//Primera funcion 
function actualizaTabla() {
    let cuerpo = "";
    obj.cliente.forEach(function (elemento) {
        let registro =
                '<tr onclick="selectCliente(' + obj.cliente.indexOf(elemento) + ');">' +
                '<td>' + obj.cliente.indexOf(elemento) + '</td>' +
                '<td>' + elemento.nomC + '</td>' +
                '<td>' + elemento.apaterno + '</td>' +
                '<td>' + elemento.amaterno + '</td>' +
                '<td>' + elemento.generoC + '</td>' +
                '<td>' + elemento.nacimientoC + '</td>' +
                '<td>' + elemento.rfcC + '</td>' +
                '<td>' + elemento.curpC + '</td>' +
                '<td>' + elemento.telefonoC + '</td>' +
                '<td>' + elemento.domicilioC + '</td>' +
                '<td>' + elemento.cpC + '</td>' +
                '<td>' + elemento.ciudadC + '</td>' +
                '<td>' + elemento.estadoC + '</td>' +
                '<td>' + elemento.registroC + '</td>' +
                '<td>' + elemento.emailC + '</td>' +
                '<td> <img src="img/' + elemento.foto + ' " width="100" > </td>' +
                '<td>' + elemento.estatus + '</td></tr>';

        cuerpo += registro;
    });
    document.getElementById("tblClientes").innerHTML = cuerpo;
}
//Segunda funcion 
// selección del cliente de acuerdo al índice del arreglo
function selectCliente(index) {
    document.getElementById("txtnom").value = obj.cliente[index].nomC;
    document.getElementById("txtpaternoC").value = obj.cliente[index].apaterno;
    document.getElementById("txtmaternoC").value = obj.cliente[index].amaterno;
    document.getElementById("txtgeneroC").value = obj.cliente[index].generoC;
    document.getElementById("txtNacimientoC").value = obj.cliente[index].nacimientoC;
    document.getElementById("txtrfcC").value = obj.cliente[index].rfcC;
    document.getElementById("txtcurpC").value = obj.cliente[index].curpC;
    document.getElementById("txtelefonoC").value = obj.cliente[index].telefonoC;
    document.getElementById("txtdomicilioC").value = obj.cliente[index].domicilioC;
    document.getElementById("txtcpC").value = obj.cliente[index].cpC;
    document.getElementById("txtciudadC").value = obj.cliente[index].ciudadC;
    document.getElementById("txtestadoC").value = obj.cliente[index].estadoC;
    document.getElementById("txtregistroC").value = obj.cliente[index].registroC;
    document.getElementById("txtemailC").value = obj.cliente[index].emailC;
 
    let ruta = 'img/';
        document.getElementById("txtFoto").src = ruta + obj.cliente[index].foto;
    
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");
    indexCliente = index;
}

function validarCampos() {
    const nombre = document.getElementById('txtnom').value;
    const apaterno = document.getElementById('txtpaternoC').value;
    const amaterno = document.getElementById('txtmaternoC').value;
    const genero = document.getElementById('txtgeneroC').value;
    const fnacimiento = document.getElementById('txtNacimientoC').value;
    const rfc = document.getElementById('txtrfcC').value;
    const curp = document.getElementById('txtcurpC').value;
    const telefono = document.getElementById('txtelefonoC').value;
    const domicilio = document.getElementById('txtdomicilioC').value;
    const cp = document.getElementById('txtcpC').value;
    const ciudad = document.getElementById('txtciudadC').value;
    const estado = document.getElementById('txtestadoC').value;
    const fregistro = document.getElementById('txtregistroC').value;

    // Verificar si algún campo está vacío
    if (nombre == '' || apaterno == '' || amaterno == '' || genero == '' || fnacimiento == '' ||
        rfc == '' || curp == '' || telefono == '' || domicilio == '' || cp == '' || ciudad == '' || estado == '' || fregistro == '') {
     
      //alerta para completar campos
      alertCampos();
      return false;
    
    }else if (isNaN(parseFloat(telefono)) || isNaN(parseFloat(cp))   ) {
                alertNumber();
               return ; 
             }
    return true; 
}
//Cuarta funcion
function agregarCliente() {
    if (!validarCampos()) {
    return; 
  }
    let nomC, apaterno, amaterno, generoC, nacimientoC, rfcC, curpC, telefonoC, 
            domicilioC, cpC, ciudadC, estadoC, registroC, emailC, foto;

    nomC = document.getElementById("txtnom").value;
    apaterno = document.getElementById("txtpaternoC").value;
    amaterno = document.getElementById("txtmaternoC").value;
    generoC = document.getElementById("txtgeneroC").value;
    nacimientoC = document.getElementById("txtNacimientoC").value;
    rfcC = document.getElementById("txtrfcC").value;
    curpC = document.getElementById("txtcurpC").value;
    telefonoC = document.getElementById("txtelefonoC").value;
    domicilioC = document.getElementById("txtdomicilioC").value;
    cpC = document.getElementById("txtcpC").value;
    ciudadC = document.getElementById("txtciudadC").value;
    estadoC = document.getElementById("txtestadoC").value;
    registroC = document.getElementById("txtregistroC").value;
    emailC = document.getElementById("txtemailC").value;
    foto = document.getElementById("archivo").value;
    
    let newClien = {};
    newClien.nomC = nomC;
    newClien.apaterno = apaterno;
    newClien.amaterno = amaterno;
    newClien.generoC = generoC;
    newClien.nacimientoC = nacimientoC;
    newClien.rfcC = rfcC;
    newClien.curpC = curpC;
    newClien.telefonoC = telefonoC;
    newClien.domicilioC = domicilioC;
    newClien.cpC = cpC;
    newClien.ciudadC = ciudadC;
    newClien.estadoC = estadoC;
    newClien.registroC = registroC;
    newClien.emailC = emailC;
    newClien.foto = foto;
    newClien.estatus = "Activo";
    obj.cliente.push(newClien);

    alertGoodJobs();
    limpiar();
    actualizaTabla();
}

//Quinta funcion 
//Método limpiar
function limpiar() {
    document.getElementById("txtnom").value = "";
    document.getElementById("txtpaternoC").value = "";
    document.getElementById("txtmaternoC").value = "";
    document.getElementById("txtgeneroC").value = "";
    document.getElementById("txtNacimientoC").value = "";
    document.getElementById("txtrfcC").value = "";
    document.getElementById("txtcurpC").value = "";
    document.getElementById("txtelefonoC").value = "";
    document.getElementById("txtdomicilioC").value = "";
    document.getElementById("txtcpC").value = "";
    document.getElementById("txtciudadC").value = "";
    document.getElementById("txtestadoC").value = "";
    document.getElementById("txtregistroC").value = "";
    document.getElementById("txtemailC").value = "";
    document.getElementById("txtFoto").value = "";

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexCliente = 0;
}

  function modificarRegistro() {
    let nomC, apaterno, amaterno, generoC, nacimientoC, rfcC, curpC, telefonoC, 
            domicilioC, cpC, ciudadC, estadoC, registroC, emailC;

    nomC = document.getElementById("txtnom").value;
    apaterno = document.getElementById("txtpaternoC").value;
    amaterno = document.getElementById("txtmaternoC").value;
    generoC = document.getElementById("txtgeneroC").value;
    nacimientoC = document.getElementById("txtNacimientoC").value;
    rfcC = document.getElementById("txtrfcC").value;
    curpC = document.getElementById("txtcurpC").value;
    telefonoC = document.getElementById("txtelefonoC").value;
    domicilioC = document.getElementById("txtdomicilioC").value;
    cpC = document.getElementById("txtcpC").value;
    ciudadC = document.getElementById("txtciudadC").value;
    estadoC = document.getElementById("txtestadoC").value;
    registroC = document.getElementById("txtregistroC").value;
    emailC = document.getElementById("txtemailC").value;

    let newClien = {};
    newClien.nomC = nomC;
    newClien.apaterno = apaterno;
    newClien.amaterno = amaterno;
    newClien.generoC = generoC;
    newClien.nacimientoC = nacimientoC;
    newClien.rfcC = rfcC;
    newClien.curpC = curpC;
    newClien.telefonoC = telefonoC;
    newClien.domicilioC = domicilioC;
    newClien.cpC = cpC;
    newClien.ciudadC = ciudadC;
    newClien.estadoC = estadoC;
    newClien.registroC = registroC;
    newClien.emailC = emailC;
    newClien.estatus = "Activo";
    obj.cliente[indexCliente] = newClien;
    
}

 // Pregunta si quiere moddificar
 function modificaCliente() {
      if (!validarCampos()) {
        return;
      }
    swal({
    title: "¿Quieres modificar el cliente seleccionado?",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
        modificarRegistro();
        actualizaTabla();
        limpiar();
      swal("¡Registro modificado con éxito!", {
        icon: "success",
      });
    } else {
      swal("¡Tu registro no fue modificado!");
    }
  });
}

//Eliminar un producto
function eliminarCliente() {
    swal({
    title: "¿Quieres eliminar el cliente seleccionado?", 
    icon: "warning", 
    buttons: true, 
    dangerMode: true, 
  })
  .then((willDelete) => {

    if (willDelete) {
      obj.cliente[indexCliente].estatus = "Inactivo";

      limpiar();
      actualizaTabla();

      swal("Eliminado con éxito!", {
      icon: "success", 
      });
    } else {

    }
  });
}
    
 function searchCliente() {
    // Obtener el valor del campo de búsqueda con id "txtBusquedaCliente"
    let valor= document.getElementById("txtBusquedaCliente").value;

    // Convertir el valor obtenido a minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas
    let filtroMinuscula = valor.toLowerCase();
    // Filtrar los elementos del arreglo "obj.medicinas" que coincidan con el filtro
    let result = obj.cliente.filter(element =>
        element.nomC.toLowerCase().includes(filtroMinuscula) ||
        element.apaterno.toLowerCase().includes(filtroMinuscula) ||
        element.amaterno.toString().includes(filtroMinuscula) ||
        element.generoC.toLowerCase().includes(filtroMinuscula) ||
        element.nacimientoC.toLowerCase().includes(filtroMinuscula) ||
        element.rfcC.toString().includes(filtroMinuscula) ||
        element.curpC.toLowerCase().includes(filtroMinuscula) ||
        element.telefonoC.toLowerCase().includes(filtroMinuscula) ||
        element.domicilioC.toString().includes(filtroMinuscula) ||
        element.cpC.toLowerCase().includes(filtroMinuscula) ||
        element.ciudadC.toLowerCase().includes(filtroMinuscula) ||
        element.estadoC.toString().includes(filtroMinuscula) ||
        element.registroC.toLowerCase().includes(filtroMinuscula) ||
        element.emailC.toString().includes(filtroMinuscula) ||
        element.estatus.toLowerCase().includes(filtroMinuscula)
    );

    // Crear una cadena vacía para almacenar el contenido de la tabla resultante
    let cuerpo = "";

    // Iterar sobre los resultados del filtro y generar las filas de la tabla con los datos correspondientes
    result.forEach(function (newClien) {
        // Crear una fila de la tabla con los datos del elemento
       
        let registro = 
        '<tr onclick="selectProducto(' + obj.cliente.indexOf(newClien) + ');">' +
                        '<td>' + obj.cliente.indexOf(newClien) + 
                        '<td>' + newClien.nomC + '</td>' +
                        '<td>' + newClien.apaterno + '</td>' +
                        '<td>' + newClien.amaterno + '</td>' +
                        '<td>' + newClien.generoC + '</td>' +
                        '<td>' + newClien.nacimientoC + '</td>' +
                        '<td>' + newClien.rfcC + '</td>' +
                        '<td>' + newClien.curpC + '</td>' +
                        '<td>' + newClien.telefonoC + '</td>' +
                        '<td>' + newClien.domicilioC + '</td>' +
                        '<td>' + newClien.cpC + '</td>' +
                        '<td>' + newClien.ciudadC + '</td>' +
                        '<td>' + newClien.estadoC + '</td>' +
                        '<td>' + newClien.registroC + '</td>' +
                        '<td>' + newClien.emailC + '</td>' +
                        '<td>' + newClien.estatus + '</td></tr>';

        // Agregar la fila a la cadena "cuerpo"
        cuerpo += registro;
    });

    // Mostrar la cadena "cuerpo" en el cuerpo de la tabla con id "tblProductos"
    document.getElementById("tblClientes").innerHTML = cuerpo;
}

 function alertCampos() {
    swal({
      title: "¡Advertencia!",
      text: "Por favor, complete todos los campos.",
      icon: "warning",
      button: "¡Entendido!",
    });
  }
function alertNumber() {
    swal({
      title: "¡Advertencia!",
      text: "Por favor, ingrese solo números en los campos solicitados..",
      icon: "warning",
      button:"¡Entendido!",
    });
  }
function alertGoodJobs() {
    swal({
      title: "¡Buen trabajo!",
      text: "Cliente agregado correctamente",
      icon: "success",
      button: "Aceptar"
    });
  }
 

function mantenimiento() {
                swal({
                    icon: 'error',
                    icon: "warning",
                    text: 'Lo sentimos, este módulo está en mantenimiento!',
                    button: "Aceptar",
                });
            }
            

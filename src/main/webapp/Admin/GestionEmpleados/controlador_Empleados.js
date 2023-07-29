let indexEmpleado; // es el índice del arreglo
let obj = []; // arreglo que se llenará de objetos JSON
let ultimoCodigo;

var text = '{"empleado":[ ' +      
  '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
  ' "persona" : {"nomE" : "Karen", "apaternoE" : "Carmona", "amaternoE" : "Pérez",   "generoE": "Mujer","nacimientoE" : "1990-07-26", "curpE" : "CARJ900726MGTRDR","rfcE" : "CARJ900726F31","emailE" : "KarenCar@gmail.com","telefonoE" : "4771239868", "fotoE" : "M1.jpeg" }, '+
  ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37100", "domicilioE" : "Echeveste" }' +     
  '},'+
  '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
 ' "persona" : {"nomE" : "Alejandro", "apaternoE" : "Fernandez", "amaternoE" : "Morales",   "generoE": "Hombre","nacimientoE" : "1987-06-25", "curpE" : "FEMA870625HGTRRL","rfcE" : "FEMA870625F30","emailE" : "Afernandez@gmail.com","telefonoE" : "4770988865", "fotoE" : "H1.jpeg" }, '+
 ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37545", "domicilioE" : "Hacienda Echeveste" }' +     
 '},'+
 '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
 ' "persona" : {"nomE" : "Alejandro", "apaternoE" : "Fernandez", "amaternoE" : "Morales",   "generoE": "Hombre","nacimientoE" : "1987-06-25", "curpE" : "FEMA870625HGTRRL","rfcE" : "FEMA870625F30","emailE" : "Afernandez@gmail.com","telefonoE" : "4770988865", "fotoE" : "H1.jpeg" }, '+
 ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37545", "domicilioE" : "Hacienda Echeveste" }' +     
 '},'+
 '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
 ' "persona" : {"nomE" : "Alejandro", "apaternoE" : "Fernandez", "amaternoE" : "Morales",   "generoE": "Hombre","nacimientoE" : "1987-06-25", "curpE" : "FEMA870625HGTRRL","rfcE" : "FEMA870625F30","emailE" : "Afernandez@gmail.com","telefonoE" : "4770988865", "fotoE" : "H1.jpeg" }, '+
 ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37545", "domicilioE" : "Hacienda Echeveste" }' +     
 '},'+
 '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
 ' "persona" : {"nomE" : "Alejandro", "apaternoE" : "Fernandez", "amaternoE" : "Morales",   "generoE": "Hombre","nacimientoE" : "1987-06-25", "curpE" : "FEMA870625HGTRRL","rfcE" : "FEMA870625F30","emailE" : "Afernandez@gmail.com","telefonoE" : "4770988865", "fotoE" : "H1.jpeg" }, '+
 ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37545", "domicilioE" : "Hacienda Echeveste" }' +     
 '},'+
 '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
 ' "persona" : {"nomE" : "Alejandro", "apaternoE" : "Fernandez", "amaternoE" : "Morales",   "generoE": "Hombre","nacimientoE" : "1987-06-25", "curpE" : "FEMA870625HGTRRL","rfcE" : "FEMA870625F30","emailE" : "Afernandez@gmail.com","telefonoE" : "4770988865", "fotoE" : "H1.jpeg" }, '+
 ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37545", "domicilioE" : "Hacienda Echeveste" }' +     
 '},'+
 '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
 ' "persona" : {"nomE" : "Alejandro", "apaternoE" : "Fernandez", "amaternoE" : "Morales",   "generoE": "Hombre","nacimientoE" : "1987-06-25", "curpE" : "FEMA870625HGTRRL","rfcE" : "FEMA870625F30","emailE" : "Afernandez@gmail.com","telefonoE" : "4770988865", "fotoE" : "H1.jpeg" }, '+
 ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37545", "domicilioE" : "Hacienda Echeveste" }' +     
 '},'+
 '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
 ' "persona" : {"nomE" : "Alejandro", "apaternoE" : "Fernandez", "amaternoE" : "Morales",   "generoE": "Hombre","nacimientoE" : "1987-06-25", "curpE" : "FEMA870625HGTRRL","rfcE" : "FEMA870625F30","emailE" : "Afernandez@gmail.com","telefonoE" : "4770988865", "fotoE" : "H1.jpeg" }, '+
 ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37545", "domicilioE" : "Hacienda Echeveste" }' +     
 '},'+
 '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
 ' "persona" : {"nomE" : "Alejandro", "apaternoE" : "Fernandez", "amaternoE" : "Morales",   "generoE": "Hombre","nacimientoE" : "1987-06-25", "curpE" : "FEMA870625HGTRRL","rfcE" : "FEMA870625F30","emailE" : "Afernandez@gmail.com","telefonoE" : "4770988865", "fotoE" : "H1.jpeg" }, '+
 ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37545", "domicilioE" : "Hacienda Echeveste" }' +     
 '},'+
  '{"codigoE" : "15060011", "ingresoE" : "2015-06-15", "puestoE" : "Gerente", "salarioE" : "90 000", "estatus" : "Activo", ' +  
   ' "persona" : {"nomE" : "Antonio", "apaternoE" : "Lopez", "amaternoE" : "Martínez",   "generoE": "Hombre","nacimientoE" : "1997-08-20", "curpE" : "LOMA970820HGTPTN","rfcE" : "LOMA970820F06","emailE" : "AntonioLopez@gmail.com","telefonoE" : "4774328976", "fotoE" : "M2.jpeg" }, '+
   ' "direccion" : {"ciudadE" : "León", "estadoE" : "Guanajuato","cpE" : "37355", "domicilioE" : "ADMS" }' +    
   '} ] }';
obj = JSON.parse(text);
console.log(obj);
actualizaTabla();

function actualizaTabla() {
    let cuerpo = "";
    obj.empleado.forEach(function (elemento) {
        let registro =
                '<tr onclick="selectEmpleado(' + obj.empleado.indexOf(elemento) + ');">' +
                '<td>' + obj.empleado.indexOf(elemento) + '</td>' +
                '<td>' + elemento.codigoE + '</td>' +
                '<td>' + elemento.persona.nomE + " " + elemento.persona.apaternoE +  " " + elemento.persona.amaternoE +'</td>' +
                '<td>' + elemento.persona.telefonoE+'</td>' +
                '<td>' + elemento.persona.emailE+'</td>' +
                '<td>' + elemento.direccion.domicilioE+ " "+ elemento.direccion.cpE+'</td>' +
                '<td> <img src="img/' + elemento.persona.fotoE + ' " width="100" > </td>' +
                '<td>' + elemento.estatus + '</td></tr>';
                ultimoCodigo=elemento.codigoE;
        cuerpo += registro;
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}

// selección del producto de acuerdo al índice del arreglo
function selectEmpleado(index) {
    document.getElementById("txtnom").value = obj.empleado[index].persona.nomE;
    document.getElementById("txtpaternoE").value = obj.empleado[index].persona.apaternoE;
    document.getElementById("txtmaternoE").value = obj.empleado[index].persona.amaternoE;
    document.getElementById("txtgeneroE").value = obj.empleado[index].persona.generoE;
    document.getElementById("txtNacimientoE").value = obj.empleado[index].persona.nacimientoE;
    document.getElementById("txtrfcE").value = obj.empleado[index].persona.rfcE;
    document.getElementById("txtcurpE").value = obj.empleado[index].persona.curpE;
    document.getElementById("txtciudadE").value = obj.empleado[index].direccion.ciudadE;
    document.getElementById("txtestadoE").value = obj.empleado[index].direccion.estadoE;
    document.getElementById("txtcpE").value = obj.empleado[index].direccion.cpE;
    document.getElementById("txtDomicilioE").value = obj.empleado[index].direccion.domicilioE;
    document.getElementById("txtelefonoE").value = obj.empleado[index].persona.telefonoE;
    document.getElementById("txtIngresoE").value = obj.empleado[index].ingresoE;
    document.getElementById("txtPuestoE").value = obj.empleado[index].puestoE;
    document.getElementById("txtSalarioE").value = obj.empleado[index].salarioE;
    document.getElementById("txtemailE").value = obj.empleado[index].persona.emailE;
    document.getElementById("txtCodigoE").value = obj.empleado[index].codigoE;
    
    let ruta = 'img/';
    document.getElementById("txtFotoE").src = ruta + obj.empleado[index].persona.fotoE;
    document.getElementById("archivoE").value =  "";
    
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");
    indexEmpleado = index;

}

function validarCampos() {
    const nombre = document.getElementById('txtnom').value;
    const apaterno = document.getElementById('txtpaternoE').value;
    const amaterno = document.getElementById('txtmaternoE').value;
    const genero = document.getElementById('txtgeneroE').value;
    const fnacimiento = document.getElementById('txtNacimientoE').value;
    const rfc = document.getElementById('txtrfcE').value;
    const curp = document.getElementById('txtcurpE').value;
    const ciudad = document.getElementById('txtciudadE').value;
    const estado = document.getElementById('txtestadoE').value;
    const cp = document.getElementById('txtcpE').value;
    const domicilio = document.getElementById('txtDomicilioE').value;
    const telefono = document.getElementById('txtelefonoE').value;
    const ingreso = document.getElementById('txtIngresoE').value;
    const puesto = document.getElementById('txtPuestoE').value;
    const salario = document.getElementById('txtSalarioE').value;
    const email = document.getElementById('txtemailE').value;


    // Verificar si algún campo está vacío
    if (nombre == '' || apaterno == '' || amaterno == '' || genero == '' || fnacimiento == '' ||
        rfc == '' || curp == ''|| ciudad == '' || estado == '' ||cp == '' || domicilio == '' || 
        telefono == ''||ingreso == ''||puesto == ''||salario == ''||email == '') {
      //Alerta para llenar todos los campos
      alertCampos();
      return false; // Cancelar la acción de agregar el producto
    
    }else if (isNaN(parseFloat(telefono))||isNaN(parseFloat(salario))|| isNaN(parseFloat(cp))) {

     //Alerta para validar los campos
      alertNumber();
      return; // Cancel the action of adding the product
    }

    return true; // Permitir la acción de agregar el producto si todos los campos están llenos
}

//Método para agregar un nuevo producto

function agregarEmpleado() {
    if (!validarCampos()) {
    return; 
  }
    let nomE, apaternoE, amaternoE, generoE, nacimientoE, rfcE, curpE, ciudadE,estadoE,cpE,domicilioE, telefonoE, 
         ingresoE,puestoE,salarioE,emailE,codigoE,fotoE;

    nomE = document.getElementById("txtnom").value;
    apaternoE = document.getElementById("txtpaternoE").value;
    amaternoE = document.getElementById("txtmaternoE").value;
    generoE = document.getElementById("txtgeneroE").value;
    nacimientoE = document.getElementById("txtNacimientoE").value;
    rfcE = document.getElementById("txtrfcE").value;
    curpE = document.getElementById("txtcurpE").value;
    ciudadE = document.getElementById("txtciudadE").value;
    estadoE = document.getElementById("txtestadoE").value;
    cpE = document.getElementById("txtcpE").value;
    domicilioE = document.getElementById("txtDomicilioE").value;
    telefonoE = document.getElementById("txtelefonoE").value;
    generaCodigo(document.getElementById("txtIngresoE").value);
    puestoE = document.getElementById("txtPuestoE").value;
    salarioE = document.getElementById("txtSalarioE").value;
    emailE = document.getElementById("txtemailE").value;
    codigoE = document.getElementById("txtCodigoE").value;
    fotoE = document.getElementById("archivoE").value;
    
    let newEmp = {};
    newEmp.codigoE= codigoE;
    newEmp.ingresoE = ingresoE;
    newEmp.puestoE= puestoE;
    newEmp.salarioE= salarioE;
    newEmp.estatus = "Activo"; 
    newEmp.persona = {}; // creamos objeto anidado persona
    newEmp.persona.nomE= nomE;
    newEmp.persona.apaternoE = apaternoE;
    newEmp.persona.amaternoE = amaternoE;
    newEmp.persona.generoE= generoE;
    newEmp.persona.nacimientoE = nacimientoE;
    newEmp.persona.rfcE = rfcE;
    newEmp.persona.curpE = curpE;
    newEmp.persona.telefonoE= telefonoE;
    newEmp.persona.emailE= emailE;
    newEmp.persona.fotoE= fotoE;
    newEmp.direccion = {}; // creamos objeto anidado usuaeio
    newEmp.direccion.ciudadE= ciudadE;
    newEmp.direccion.estadoE = estadoE;
    newEmp.direccion.cpE = cpE;
    newEmp.direccion.domicilioE = domicilioE;
   
    obj.empleado.push(newEmp );
    let jsonData = JSON.stringify(obj.empleado);

    console.log(jsonData);
    console.log(typeof (jsonData));
    alertGoodJobs();
    limpiar();
    actualizaTabla();
}
//Método limpiar
function limpiar() {
    document.getElementById("txtnom").value = "";
    document.getElementById("txtpaternoE").value = "";
    document.getElementById("txtmaternoE").value = "";
    document.getElementById("txtgeneroE").value = "";
    document.getElementById("txtNacimientoE").value = "";
    document.getElementById("txtrfcE").value = "";
    document.getElementById("txtcurpE").value = "";
    document.getElementById("txtciudadE").value = "";
    document.getElementById("txtestadoE").value = "";
    document.getElementById("txtcpE").value = "";
    document.getElementById("txtDomicilioE").value = "";
    document.getElementById("txtelefonoE").value = "";
    document.getElementById("txtIngresoE").value = "";
    document.getElementById("txtPuestoE").value = "";
    document.getElementById("txtSalarioE").value = "";
    document.getElementById("txtemailE").value = "";
    document.getElementById("txtCodigoE").value = "";
    document.getElementById("txtFotoE").src= "img/nada.jpg";
    document.getElementById("archivoE").value= "";
    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexEmpleado = 0;
}

  function modificarRegistro() {
   let nomE, apaternoE, amaternoE, generoE, nacimientoE, rfcE, curpE, ciudadE,estadoE,cpE,domicilioE, telefonoE, 
         ingresoE,puestoE,salarioE,emailE,codigoE;
    nomE = document.getElementById("txtnom").value;
    apaternoE = document.getElementById("txtpaternoE").value;
    amaternoE = document.getElementById("txtmaternoE").value;
    generoE = document.getElementById("txtgeneroE").value;
    nacimientoE = document.getElementById("txtNacimientoE").value;
    rfcE = document.getElementById("txtrfcE").value;
    curpE = document.getElementById("txtcurpE").value;
    ciudadE = document.getElementById("txtciudadE").value;
    estadoE = document.getElementById("txtestadoE").value;
    cpE = document.getElementById("txtcpE").value;
    domicilioE = document.getElementById("txtDomicilioE").value;
    telefonoE = document.getElementById("txtelefonoE").value;
    puestoE = document.getElementById("txtIngresoE").value;
    puestoE = document.getElementById("txtPuestoE").value;
    salarioE = document.getElementById("txtSalarioE").value;
    emailE = document.getElementById("txtemailE").value;
    codigoE = document.getElementById("txtCodigoE").value;
 
      
    let newEmp = {};
    newEmp.codigoE= codigoE;
    newEmp.ingresoE = ingresoE;
    newEmp.puestoE= puestoE;
    newEmp.salarioE= salarioE;
    newEmp.estatus = "Activo"; 
    newEmp.persona = {}; // creamos objeto anidado persona
    newEmp.persona.nomE= nomE;
    newEmp.persona.apaternoE = apaternoE;
    newEmp.persona.amaternoE = amaternoE;
    newEmp.persona.generoE= generoE;
    newEmp.persona.nacimientoE = nacimientoE;
    newEmp.persona.rfcE = rfcE;
    newEmp.persona.curpE = curpE;
    newEmp.persona.telefonoE= telefonoE;
    newEmp.persona.emailE= emailE;
    newEmp.direccion = {}; // creamos objeto anidado usuaeio
    newEmp.direccion.ciudadE= ciudadE;
    newEmp.direccion.estadoE = estadoE;
    newEmp.direccion.cpE = cpE;
    newEmp.direccion.domicilioE = domicilioE;
    obj.empleado[indexEmpleado] = newEmp;
    
}

 // Pregunta si quiere moddificar
 function modificaEmpleado() {
     if (!validarCampos()) {
        return;
      }
    swal({
    title: "¿Quieres modificar el empleado seleccionado?",
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
function eliminarEmpleado() {
    swal({
    title: "¿Quieres eliminar el empleado seleccionado?", 
    icon: "warning", 
    buttons: true, 
    dangerMode: true, 
  })
  .then((willDelete) => {

    if (willDelete) {
      obj.empleado[indexEmpleado].estatus = "Inactivo";

      limpiar();
      actualizaTabla();

      swal("Eliminado con éxito!", {
        icon: "success", 
      });
    } else {

    }
  });
}

 function searchEmpleado() {
    // Obtener el valor del campo de búsqueda con id "txtBusquedaCliente"
    let valor= document.getElementById("txtBusquedaEmpleado").value;

    // Convertir el valor obtenido a minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas
    let filtroMinuscula = valor.toLowerCase();

    // Filtrar los elementos del arreglo "obj.medicinas" que coincidan con el filtro
    let result = obj.empleado.filter(element =>
        element.nomE.toLowerCase().includes(filtroMinuscula) ||
        element.apaternoE.toLowerCase().includes(filtroMinuscula) ||
        element.apaternoE.toString().includes(filtroMinuscula) ||
        element.generoE.toLowerCase().includes(filtroMinuscula) ||
        element.nacimientoE.toLowerCase().includes(filtroMinuscula) ||
        element.rfcE.toString().includes(filtroMinuscula) ||
        element.curpE.toLowerCase().includes(filtroMinuscula) ||
        element.ciudadaE.toString().includes(filtroMinuscula) ||
        element.estadoE.toLowerCase().includes(filtroMinuscula) ||
        element.cpE.toString().includes(filtroMinuscula) ||
        element.domicilioE.toString().includes(filtroMinuscula) ||
        element.telefonoE.toString().includes(filtroMinuscula) ||
        element.ingresoE.toString().includes(filtroMinuscula) ||
        element.puestoE.toString().includes(filtroMinuscula) ||
        element.salarioE.toString().includes(filtroMinuscula) ||
        element.emailE.toString().includes(filtroMinuscula) ||
        element.codigoE.toString().includes(filtroMinuscula) ||
        element.estatus.toLowerCase().includes(filtroMinuscula)
    );

    // Crear una cadena vacía para almacenar el contenido de la tabla resultante
    let cuerpo = "";

    // Iterar sobre los resultados del filtro y generar las filas de la tabla con los datos correspondientes
    result.forEach(function (newEmp) {
        // Crear una fila de la tabla con los datos del elemento
        let registro = 
        '<tr onclick="selectEmpleado(' + obj.empleado.indexOf(newEmp) + ');">' +
                        '<td>' + obj.empleado.indexOf(newEmp) + 
                        '<td>' + newEmp.nomE + '</td>' +
                        '<td>' + newEmp.apaternoE + '</td>' +
                        '<td>' + newEmp.amaternoE + '</td>' +
                        '<td>' + newEmp.generoE + '</td>' +
                        '<td>' + newEmp.nacimientoE + '</td>' +
                        '<td>' + newEmp.rfcE + '</td>' +
                        '<td>' + newEmp.curpE + '</td>' +
                        '<td>' + newEmp.ciudadE + '</td>' +
                        '<td>' + newEmp.estadoE + '</td>' +
                        '<td>' + newEmp.cpE + '</td>' +
                        '<td>' + newEmp.domicilioE + '</td>' +
                        '<td>' + newEmp.telefonoE + '</td>' +
                        '<td>' + newEmp.ingresoE + '</td>' +
                        '<td>' + newEmp.puestoE + '</td>' +
                        '<td>' + newEmp.salarioE + '</td>' +
                        '<td>' + newEmp.emailE + '</td>' +
                        '<td>' + newEmp.codigoE + '</td>' +
                        '<td> <img src="img/' + newEmp.fotoE + ' " width="100" > </td>' +
                        '<td>' + newEmp.estatus + '</td></tr>';

        // Agregar la fila a la cadena "cuerpo"
        cuerpo += registro;
    });

    // Mostrar la cadena "cuerpo" en el cuerpo de la tabla con id "tblProductos"
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}
function generaCodigo(fecha){  
    let codigoE=0;
    
    console.log("fecha",fecha);
    
    let anio = fecha.substring(2,4);
     console.log("año",anio);
    
    let mes = fecha.substring(5,7);
      console.log("mes",mes);
      
    ultimoCodigo=Number(ultimoCodigo.substring(4,8))+1;
     console.log("ultimoCodigo",ultimoCodigo);
    
    if (ultimoCodigo<10)
         codigoE=anio+mes+"000"+ ultimoCodigo;
    else if (ultimoCodigo<100)
         codigoE=anio+mes+"00"+ ultimoCodigo;
    else if (ultimoCodigo<1000)
         codigoE=anio+mes+"0"+ ultimoCodigo;
    else 
         codigoE=anio+mes+ultimoCodigo;
     
    console.log("codigo",codigoE);
    
    document.getElementById("txtCodigoE").value= codigoE;
    
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
      text: "Empleado agregado correctamente",
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
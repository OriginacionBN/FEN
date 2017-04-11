function getDatosCliente1() {
    var lista = [];
    var regimen = document.getElementById('regimen').value;
    lista.push(regimen);
    var rvgl = (document.getElementById('rvgl').value);
    lista.push(rvgl);
    var analista = document.getElementById('analista').value;
    lista.push(analista);
    var fechaVisita = document.getElementById('fechaVisita').value;
    lista.push(fechaVisita);
    var oficinas = document.getElementById('oficina').value;
    lista.push(oficinas);
    var tipoCliente = document.getElementById('tipoCliente').value;
    lista.push(tipoCliente);
    var razonSocial = document.getElementById('razonSocial').value;
    lista.push(razonSocial);
    var ruc = (document.getElementById('ruc').value);
    lista.push(ruc);
    var ubicacion = document.getElementById('ubicacion').value;
    lista.push(ubicacion);
    var aExp = (document.getElementById('aExp').value);
    lista.push(aExp);
    var nroPtosVta = (document.getElementById('nroPtosVta').value);
    lista.push(nroPtosVta);
    var nroAlmacenes = (document.getElementById('nroAlmacenes').value);
    lista.push(nroAlmacenes);
    lista.push("");
    var actividad = document.getElementById('actividad').value;
    lista.push(actividad);
    var actEspecifica = document.getElementById('actEspecifica').value;
    lista.push(actEspecifica);
    var buro = document.getElementById('buro').value;
    lista.push(buro);
    var nroEnt = (document.getElementById('nroEnt').value);
    lista.push(nroEnt);
    var edadRL = (document.getElementById('edadRL').value);
    lista.push(edadRL);
    if (edadRL < 18) {
        alert("El representante legal debe ser mayor de edad");
	return null;
    }
    return lista;
}
function getDatosCliente() {
    var lista = [];
    var regimen = document.getElementById('regimen').value;
    lista.push(regimen);
    var rvgl = (document.getElementById('rvgl').value);
    lista.push(rvgl);
    var analista = document.getElementById('analista').value;
    lista.push(analista);
    var fechaVisita = document.getElementById('fechaVisita').value;
    lista.push(fechaVisita);
    var oficinas = document.getElementById('oficina').value;
    lista.push(oficinas);
    var tipoCliente = document.getElementById('tipoCliente').value;
    lista.push(tipoCliente);
    var razonSocial = document.getElementById('razonSocial').value;
    lista.push(razonSocial);
    var ruc = (document.getElementById('ruc').value);
    lista.push(ruc);
    var ubicacion = document.getElementById('ubicacion').value;
    lista.push(ubicacion);
    var aExp = (document.getElementById('aExp').value);
    lista.push(aExp);
    var nroPtosVta = (document.getElementById('nroPtosVta').value);
    lista.push(nroPtosVta);
    var nroAlmacenes = (document.getElementById('nroAlmacenes').value);
    lista.push(nroAlmacenes);
    lista.push("");
    var actividad = document.getElementById('actividad').value;
    lista.push(actividad);
    var actEspecifica = document.getElementById('actEspecifica').value;
    lista.push(actEspecifica);
    var buro = document.getElementById('buro').value;
    lista.push(buro);
    var nroEnt = (document.getElementById('nroEnt').value);
    lista.push(nroEnt);
    var edadRL = (document.getElementById('edadRL').value);
    lista.push(edadRL);
    if (regimen == "" || rvgl == 0 || fechaVisita == "" || oficinas == "" || tipoCliente == "" ||
        razonSocial == "" || ruc == 0 || ubicacion == "" || aExp == "" || nroPtosVta == "" || nroAlmacenes == "" ||
        actividad == "" || actEspecifica == "" || buro == "" || nroEnt == "" || edadRL == "") {
        alert("Falta completar todos los datos del cliente");
        return null;
    }
    if (edadRL < 18) {
        alert("El representante legal debe ser mayor de edad");
        return null;
    }
    return lista;
}
function getIngresos(){
    var lista = [];
        lista.push(document.getElementById("util_bruta_Total").value);
    lista.push(document.getElementById("ventas_x_prod_Total").value);
    lista.push(document.getElementById("vtas_comercio_base").value);
    lista.push(document.getElementById("margen_bruto").value);
    lista.push(document.getElementById("margen_bruto_referencial").value);
    lista.push(document.getElementById("declarado").value);
    lista.push(document.getElementById("informalidad").value);

    var table = document.getElementById("tablaProductos");
    var total = table.rows.length-2;
    lista.push(total);
    for (var i = 0; i< total; i++){
        var idx = i +1;
        var Prod = document.getElementById("Prod"+idx).value;
        lista.push(Prod);
        var unidades_vendidas = convNro(document.getElementById("unidades_vendidas_"+idx).value);
        lista.push(unidades_vendidas);
        var unidades_x_presentacion = document.getElementById("unidades_x_presentacion_"+idx).value;
        lista.push(unidades_x_presentacion);

        var pcompra = convNro(document.getElementById("pcompra_"+idx).value);
        lista.push(pcompra);
        var pventa = convNro(document.getElementById("pventa_"+idx).value);
        lista.push(pventa);
        var util_bruta = convNro(document.getElementById("util_bruta_"+idx).value);
        lista.push(util_bruta);
        var ventas_x_prod = convNro(document.getElementById("ventas_x_prod_"+idx).value);
        lista.push(ventas_x_prod);
    }
    
    return lista;   
}
function getEgresos(){
    var lista = [];
    
    lista.push(document.getElementById("miembros").value);
        lista.push(document.getElementById("gastos_implicitos").value);
        lista.push(document.getElementById("alquiler").value);
        lista.push(document.getElementById("deuda_personal").value);
        lista.push(document.getElementById("otros_personal").value);
        lista.push(document.getElementById("total_gastpersonal").value);

        lista.push(document.getElementById("planilla").value);
        lista.push(document.getElementById("num_planilla_comercio").value);
        lista.push(document.getElementById("sueldo_planilla_comercio").value);
        lista.push(document.getElementById("total_planilla_comercio").value);
        lista.push(document.getElementById("gastop_comercio_1").value);
        lista.push(document.getElementById("gastop_comercio_2").value);
        lista.push(document.getElementById("gastop_comercio_3").value);
        lista.push(document.getElementById("gastop_comercio_4").value);
        lista.push(document.getElementById("gastop_comercio_5").value);
        lista.push(document.getElementById("total_gastop_comercio").value);
    
    return lista;
}
function AgregarProducto() {
    var table = document.getElementById("tablaProductos");
    var idx = table.rows.length - 1;
    var row = table.insertRow(idx);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = '<input class="form-control" id = "Prod' + idx + '"/>';
    cell2.innerHTML = '<input class="form-control" id="unidades_vendidas_' + idx + '" onkeyup=";validarNumero(id);calcular_ingresos_comercio();"/>';
    cell3.innerHTML = '<select class="form-control" id="unidades_x_presentacion_' + idx + '">' +
            '<option value="0"></option>' +
            '<option value="Galones">Galones</option>' +
            '<option value="Kilos">Kilos</option>' +
            '<option value="Litros">Litros</option>' +
            '<option value="Metros">Metros</option>' +
            '<option value="Pies">Pies</option>' +
            '<option value="Rollos">Rollos</option>' +
            '<option value="Sacos">Sacos</option>' +
            '<option value="Otros">Otros</option>' +
            '</select>';
    cell4.innerHTML = '<input class="form-control" id="pcompra_' + idx + '" onkeyup="validarNumero(id);calcular_ingresos_comercio();"/>';
    cell5.innerHTML = '<input class="form-control" id="pventa_' + idx + '" onkeyup="validarNumero(id);calcular_ingresos_comercio();"/>';
    cell6.innerHTML = '<div id="util_bruta_' + idx + '">';
    cell7.innerHTML = '<div id="ventas_x_prod_' + idx + '">';
}
function EliminarProducto() {
    var table = document.getElementById("tablaProductos")
    var idx = table.rows.length - 2
    if (table.rows.length > 3) {
        table.deleteRow(idx);
        calcular_ingresos_comercio();
    }



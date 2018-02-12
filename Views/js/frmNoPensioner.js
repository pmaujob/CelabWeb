emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

function onLoadBody() {

    $(document).ready(function () {
        $('select').material_select();
    });

    $('.modal').modal();
    $('#waitModal').modal({
        dismissible: false
    });

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 16, // Creates a dropdown of 15 years to control year,
        today: 'Hoy',
        labelMonthNext: 'Mes Siguiente',
        labelMonthPrev: 'Mes Anterior',
        labelMonthSelect: 'Selecciona un mes',
        labelYearSelect: 'Selecciona un año',
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        weekdaysLetter: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        clear: 'Limpiar',
        close: 'Cerrar',
        closeOnSelect: false // Close upon selecting a date,
    });

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/indexBoth.php',
        async: true,
        data: {opModel: "MOD_GET_PLACES", codDep: null},
        timeout: 0,
        success: function (respuesta) {

            var deps = JSON.parse(respuesta);
            for (var i = 0; i < deps.length; i++) {

                var dep = deps[i];
                var option = document.createElement('option');
                option.value = dep.cod;
                option.innerHTML = dep.des;

                $('#lstDep').append(option);
            }
            $("#lstDep").material_select('update');

        }, error: function () {
            alert('Unexpected Error');
            return;
        }
    });

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/indexBoth.php',
        async: true,
        data: {opModel: "MOD_GET_DOCUMENT_TYPE"},
        timeout: 0,
        success: function (respuesta) {

            var types = JSON.parse(respuesta);
            for (var i = 0; i < types.length; i++) {

                var type = types[i];
                var option = document.createElement('option');
                option.value = type.id;
                option.innerHTML = type.des;

                $('#lstTipo').append(option);
            }
            $("#lstTipo").material_select('update');

        }, error: function () {
            alert('Unexpected Error');
            return;
        }
    });

}

function getTowns(select) {

    var depId = select.value;

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/indexBoth.php',
        async: true,
        data: {opModel: "MOD_GET_PLACES", codDep: depId},
        timeout: 0,
        success: function (respuesta) {

            var lstTown = document.getElementById('lstTown');
            for (var i = 1; i < lstTown.length; i++) {
                lstTown.remove(i);
                i--;
            }

            var deps = JSON.parse(respuesta);
            for (var i = 0; i < deps.length; i++) {

                var dep = deps[i];
                var option = document.createElement('option');
                option.value = dep.cod;
                option.innerHTML = dep.des;

                $('#lstTown').append(option);
            }
            $("#lstTown").material_select('update');

        }, error: function () {
            alert('Unexpected Error');
            return;
        }
    });

}

function registNoPensioner() {

    var inFirstName = document.getElementById('inFirstName');
    var inLastName = document.getElementById('inLastName');
    var lstSex = document.getElementById('lstSex');
    var inEmail = document.getElementById('inEmail');
    var inConEmail = document.getElementById('inConEmail');
    var lstTipo = document.getElementById('lstTipo');
    var inDocument = document.getElementById('inDocument');
    var inConDocument = document.getElementById('inConDocument');
    var lstDep = document.getElementById('lstDep');
    var lstTown = document.getElementById('lstTown');

    if (inFirstName.value.toString().trim().length == 0) {
        alert("Debe ingresar su(s) Nombre(s).");
        inFirstName.focus();
        return;
    }

    if (inLastName.value.toString().trim().length == 0) {
        alert("Debe ingresar su(s) Apellido(s).");
        inLastName.focus();
        return;
    }

    if (lstSex.value == 0) {
        alert("Debe seleccionar su Sexo.");
        lstSex.focus();
        return;
    }

    if (inEmail.value.toString().trim().length == 0) {
        alert("Debe ingresar una cuenta de correo electrónico existente.");
        inEmail.focus();
        return;
    }

    if (!emailRegex.test(inEmail.value)) {
        alert("El email ingresado no es válido.");
        inEmail.focus();
        return;
    }

    if (inConEmail.value.toString().trim().length == 0) {
        alert("Debe confirmar el correco electrónico ingresado.");
        inConEmail.focus();
        return;
    }

    if (inEmail.value.toString().trim() != inConEmail.value.toString().trim()) {
        alert("Los correos ingresados no coinciden.");
        inEmail.focus();
        return;
    }

    if (lstTipo.value == 0) {
        alert("Debe seleccionar su Tipo de Documento.");
        lstTipo.focus();
        return;
    }

    if (inDocument.value.toString().trim().length == 0) {
        alert("Debe ingresar el número de su documento de identidad.");
        inDocument.focus();
        return;
    }

    if (inConDocument.value.toString().trim().length == 0) {
        alert("Debe confirmar el número de documento ingresado.");
        inConDocument.focus();
        return;
    }

    if (inDocument.value.toString().trim() != inConDocument.value.toString().trim()) {
        alert("Los números de documento ingresados no coinciden.");
        inDocument.focus();
        return;
    }

    if (lstDep.value == 0) {
        alert("Debe seleccionar el departamento de expedición de su documento de identidad.");
        lstDep.focus();
        return;
    }

    if (lstTown.value == 0) {
        alert("Debe seleccionar el lugar de expedición de su documento de identidad.");
        lstTown.focus();
        return;
    }

    var noPensionerData = new Array();
    noPensionerData.push(inFirstName.value.toString().trim());//0
    noPensionerData.push(inLastName.value.toString().trim());//1
    noPensionerData.push(lstSex.value);//2
    noPensionerData.push(inEmail.value.toString().trim());//3
    noPensionerData.push(lstTipo.value);//4
    noPensionerData.push(inDocument.value.toString().trim());//5
    noPensionerData.push(lstTown.value);//6

    $('#waitModal').modal('open');

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/indexBoth.php',
        async: true,
        data: {opModel: "MOD_REGIST_NO_PENSIONER", noPensionerData: noPensionerData},
        timeout: 0,
        success: function (respuesta) {

            $('#waitModal').modal('close');
            if (respuesta.toString().trim() == "-1") {
                alert('La cédula ingresada ya se encuentra registrada.');
            } else if (respuesta.toString().trim() == "0") {
                alert('Ocurrió un error durante el registro, por favor vuelva a intentarlo');
            } else {
                alert('El registro se ha realizado con éxito, se ha enviado un correo de confirmación'
                        + 'a su correo electrónico, debe acceder a él para activar su registro.');
                
                location.href = "../index.php";//testear                                                
            }

        }, error: function () {
            alert('Unexpected Error');
        }, complete: function () {
            $('#waitModal').modal('close');
        }
    });

}

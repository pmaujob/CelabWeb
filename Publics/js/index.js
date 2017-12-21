function onLoadBody() {

    $(document).ready(function () {
        $('select').material_select();
    });

    $('.modal').modal();
    $('#waitModal').modal({backdrop: 'static', keyboard: false});

    document.getElementById('logoc').style.bottom = "0";

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/indexBoth.php',
        async: true,
        data: {opModel: "MOD_VINCULATION_TYPE"},
        timeout: 0,
        success: function (respuesta) {

            if (respuesta != "MOD_ERROR") {

                var vitypes = JSON.parse(respuesta);
                for (var i = 0; i < vitypes.length; i++) {

                    var vitype = vitypes[i];
                    var option = document.createElement('option');
                    option.value = vitype.idvin;
                    option.innerHTML = vitype.des;

                    $('#listTipo').append(option);
                }
                $("#listTipo").material_select('update');

            } else {
                alert('Modelo no encontrado');
                console.log(respuesta);
            }

        }, error: function () {
            alert('Unexpected Error');
        }
    });

}

function request() {

    var nDocument = document.getElementById('nDocument');
    var opcionSeleccionada = document.getElementById('listTipo');

    if (nDocument.value.trim().length == 0) {
        alert('Debe ingresar un número de documento');
        nDocument.focus();
        return;
    }

    if (opcionSeleccionada.value == 0) {
        alert('Debe seleccionar un tipo de documento');
        opcionSeleccionada.focus();
        return;
    }

    $('#waitModal').modal('open');

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/indexBoth.php',
        async: true,
        data: {opModel: "MOD_SEARCH_CONTRACTOR", document: nDocument.value, docType: opcionSeleccionada.value},
        timeout: 0,
        success: function (respuesta) {

            console.log(respuesta);

            if (respuesta != "MOD_ERROR") {

                var contractData = JSON.parse(respuesta);
                if (contractData.length == 0) {

                    document.getElementById('lblError').classList.remove("hideControl");

                } else {

                    var mapForm = document.createElement("form");
                    mapForm.style.display = "none";
                    mapForm.target = "Map";
                    mapForm.method = "POST";
                    mapForm.action = "contractInfo.php";

                    var idInput = document.createElement("input");
                    idInput.type = "text";
                    idInput.name = "contractData";
                    idInput.value = respuesta;
                    mapForm.appendChild(idInput);

                    document.body.appendChild(mapForm);
                    mapForm.submit();

                }

            } else {

                alert('Modelo no encontrado');
            }

            $('#waitModal').modal('close');

        }, error: function () {
            alert('Unexpected Error');
            $('#waitModal').modal('close');
        }
    });


}

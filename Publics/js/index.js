function onLoadBody() {

    $(document).ready(function () {
        $('select').material_select();
    });

    document.getElementById('logoc').style.bottom = "0";

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/ManagementWS.php',
        async: true,
        data: {opModel: "MOD_VINCULATION_TYPE"},
        timeout: 0,
        success: function (respuesta) {

            if (respuesta != "MOD_ERROR") {
                                
                var vitypes = JSON.parse(respuesta);
                for (var i = 0; i < vitypes.length; i++) {
                    
                    var vitype = vitypes[i];
                    var option = document.createElement('option');
                    option.value = vitype.id;
                    option.innerHTML = vitype.des;

                    $('#listTipo').append(option);
                }
                $("#listTipo").material_select('update');
                
            } else {
                alert('Modelo no encontrado');
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
    
    if(opcionSeleccionada.value == 0){
        alert('Debe seleccionar un tipo de documento');
        opcionSeleccionada.focus();
        return;
    }
    

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/CelabServices/ManagementWS.php',
        async: true,
        data: {opModel: "MOD_SEARCH_DOCUMENT", document: nDocument.value, docType: opcionSeleccionada.value},
        timeout: 0,
        success: function (respuesta) {

            if (respuesta != "MOD_ERROR") {

            } else {                
                alert('Modelo no encontrado');                
            }

        }, error: function () {
            alert('Unexpected Error');
        }
    });


}

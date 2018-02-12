function onLoadBody(value) {

    console.log(value);

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/indexBoth.php',
        async: true,
        data: {opModel: "MOD_CONFIRM_NO_PENSIONER", sha1: value},
        timeout: 0,
        success: function (respuesta) {

            var msg = document.getElementById('msg');
            var response = respuesta.toString().trim().split(',')[0];
            var doc = respuesta.toString().trim().split(',')[1];

            switch (response) {

                case "1"://Se activó el registro
                    msg.innerHTML = "Su registro fue activado con éxito.";
                    break;

                case "2"://Encontró y estaba activo
                    msg.innerHTML = "Sus datos ya se encontraban activos.";
                    break;

                case "3"://No lo encontró
                    msg.innerHTML = "No se encontraron sus datos.";
                    break;

                default:

                    alert("Error: " + respuesta);
                    break;
            }

        }, error: function () {
            alert('Unexpected Error');
            return;
        }
    });

}




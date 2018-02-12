emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
contractorData = new Array();
contractData = new Array();

function onLoadBody(jsonContracts) {

    $(document).ready(function () {
        $('#bModalAdds').modal({
            complete: function () {

                document.getElementById('lstAdds').innerHTML = "";

            }
        }
        );
    });
    var nomGetted = false;
    var contractTable = document.getElementById("contractTable");
    contractData = jsonContracts;
    for (var i = 0; i < jsonContracts.length; i++) {
        var obj = jsonContracts[i];
        if (!nomGetted) {
            nomGetted = true;
            contractorData.push(obj.nom);
            document.getElementById("tdName").innerHTML = obj.nom;
            contractorData.push(obj.doc);
            document.getElementById("tdDoc").innerHTML = obj.doc;
            contractorData.push(obj.email);
            if (obj.email != null && obj.email.trim() != "") {
                document.getElementById("tdEmail").innerHTML = obj.email;
            } else {
                document.getElementById("tdEmail").style.display = "none";
                document.getElementById("divEmailMsg").style.display = "none";
            }
            contractorData.push(obj.bd);
        }

        var trContract = document.createElement('tr');
        trContract.id = "tr" + i;
        var tdNo = document.createElement('td');
        tdNo.innerHTML = "" + (i + 1);
        tdNo.className += "center-align";
        trContract.appendChild(tdNo);
        var tdNum = document.createElement('td');
        tdNum.innerHTML = "" + obj.num;
        tdNum.className += "center-align";
        trContract.appendChild(tdNum);
        var tdType = document.createElement('td');
        tdType.innerHTML = "" + obj.tip;
        tdType.className += "center-align";
        trContract.appendChild(tdType);
        var tdFecs = document.createElement('td');
        tdFecs.innerHTML = "" + obj.fecs;
        tdFecs.className += "center-align";
        trContract.appendChild(tdFecs);
        var tdFect = document.createElement('td');
        tdFect.innerHTML = "" + obj.fect;
        tdFect.className += "center-align";
        trContract.appendChild(tdFect);
        var tdSelect = document.createElement('td');
        tdSelect.className += "center-align";
        tdSelect.innerHTML = '<input type="checkbox" class="filled-in checkbox-blue" id="CHK' + (i + 1) + '" checked="checked" />'
                + '<label for="CHK' + (i + 1) + '"></label>';
        trContract.appendChild(tdSelect);

        var tdAdds = document.createElement('td');
        tdAdds.className += "center-align";
        var aAdds = document.createElement('a');
        aAdds.className = "waves-effect waves-light";
        aAdds.href = "#!";
        aAdds.dataId = obj.cod.toString();
        aAdds.dataBd = obj.bd.toString();

        if (aAdds.addEventListener) {  // all browsers except IE before version 9
            aAdds.addEventListener("click", function () {
                getContractAdds(this);
            }, false);
        } else {
            if (aAdds.attachEvent) {   // IE before version 9
                aAdds.attachEvent("click", function () {
                    getContractAdds(this);
                });
            }
        }

        var aAddsIcon = document.createElement('img');
        aAddsIcon.src = "../../Publics/images/file_icon.png";
        aAddsIcon.style.width = "50%";
        aAddsIcon.className += "icon-addition";
        aAdds.appendChild(aAddsIcon);
        tdAdds.appendChild(aAdds);
        trContract.appendChild(tdAdds);

        contractTable.appendChild(trContract);
    }

}

function generateCert() {

    var emailId = document.getElementById("emailId");
    if ((contractorData[2] == null || contractorData[2] == "") && emailId.value.trim() == "") {
        alert("Debe ingresar su correo electrónico.");
        return;
    }

    if (emailId.value.trim() != "" && !emailRegex.test(emailId.value)) {
        alert("El email ingresado no es válido.");
        return;
    }

    var contractString = "";
    var contChk = 0;
    for (var i = 0; i < contractData.length; i++) {

        var contractObj = contractData[i];
        var chk = document.getElementById('CHK' + (i + 1));
        if (chk.checked) {
            contractString += contractObj.num + "|"; //0
            contractString += contractObj.tip + "|"; //1
            contractString += contractObj.fecs + "|"; //2
            contractString += contractObj.fect + "|"; //3
            contractString += contractObj.val + "|"; //4
            contractString += contractObj.obj + "|"; //5
            contractString += contractObj.bd + "|"; //6
            contractString += contractObj.cod; //7

            contractString += "@sltlnr";
            contChk++;
        }

    }

    if (contChk == 0) {
        alert("Debe seleccionar al menos un contrato para expedir el certificado.");
        return;
    }

    if ((contractorData[2] == null || contractorData[2] == "") || emailId.value != "") {
        contractorData[2] = emailId.value;
    }

    var mapForm = document.createElement("form");
    mapForm.style.display = "none";
    mapForm.target = "Map";
    mapForm.method = "POST";
    mapForm.action = "http://localhost/Celab/indexBoth.php";
    var typeInput = document.createElement("input");
    typeInput.type = "text";
    typeInput.name = "opModel";
    typeInput.value = "CERT_CONTRACTOR";
    mapForm.appendChild(typeInput);
    var cDataInput = document.createElement("input");
    cDataInput.type = "text";
    cDataInput.name = "contractorData";
    cDataInput.value = contractorData;
    mapForm.appendChild(cDataInput);
    var dataInput = document.createElement("input");
    dataInput.type = "text";
    dataInput.name = "contractData";
    dataInput.value = contractString;
    mapForm.appendChild(dataInput);
    document.body.appendChild(mapForm);
    mapForm.submit();
}

function getContractAdds(object) {

    jQuery.ajax({
        type: 'POST',
        url: 'http://localhost/Celab/indexBoth.php',
        async: true,
        data: {opModel: 'MOD_GET_CONTRACT_ADDS', idContract: object.dataId, bd: object.dataBd},
        timeout: 0,
        success: function (respuesta) {

            if (respuesta != "MOD_ERROR") {

                var adds = JSON.parse(respuesta);
                var lstAdds = document.getElementById('lstAdds');
                for (var i = 0; i < adds.length; i++) {

                    var addObj = adds[i];

                    if (!(addObj.fecl == '1900-01-01' && addObj.val == '0')) {
                        var liAdd = document.createElement('li');
                        liAdd.className += "collection-item";

                        if ((object.dataBd == "siscon" && addObj.fecl != '1900-01-01' && addObj.val != '0') ||
                                (object.dataBd != "siscon" && (addObj.fecl != null && addObj.fecl.trim() != "") &&
                                        (addObj.val != null && addObj.val.trim() != ""))) {

                            liAdd.innerHTML = '<span class="title">Adición en tiempo y valor</span>'
                                    + '<p>Periodo: ' + addObj.fecs + ' - ' + addObj.fecl + '<br>'
                                    + 'Valor: ' + addObj.val + '<p>';

                        } else if ((object.dataBd == "siscon" && addObj.fecl != '1900-01-01') ||
                                (object.dataBd != "siscon" && addObj.fecl != null && addObj.fecl.trim() != "")) {

                            liAdd.innerHTML = '<span class="title">Adición en tiempo</span>'
                                    + '<p>Periodo: ' + addObj.fecs + ' - ' + addObj.fecl + '<p>';

                        } else if ((object.dataBd == "siscon" && addObj.val != '0') ||
                                (object.dataBd != "siscon" && addObj.val != null && addObj.val.trim() != "")) {

                            liAdd.innerHTML = '<span><strong>Adición en valor</strong></span>'
                                    + '<p>Valor: $ ' + addObj.val + '<p>';

                        }
                        lstAdds.appendChild(liAdd);

                    }

                }

                if (adds.length == 0) {
                    alert("El contrato no contiene adiciones.");
                } else {
                    $('#bModalAdds').modal('open');
                }


            } else {
                alert('Modelo no encontrado');
                console.log(respuesta);
            }

        }, error: function () {
            alert('Unexpected Error');
        }
    });

}


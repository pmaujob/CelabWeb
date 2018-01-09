emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
contractorData = new Array();
contractData = new Array();


function onLoadBody(jsonContracts) {

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
            document.getElementById("tdEmail").innerHTML = obj.email;

            if (obj.email != null && obj.email != "") {
                document.getElementById("divEmail").style.display = "none";
            } else {
                document.getElementById("tdEmail").style.display = "none";
            }

        }

        var trAddition = document.createElement('tr');

        var tdNo = document.createElement('td');
        tdNo.innerHTML = "" + (i + 1);
        tdNo.className += "center-align";
        trAddition.appendChild(tdNo);

        var tdNum = document.createElement('td');
        tdNum.innerHTML = "" + obj.num;
        tdNum.className += "center-align";
        trAddition.appendChild(tdNum);

        var tdType = document.createElement('td');
        tdType.innerHTML = "" + obj.tip;
        tdType.className += "center-align";
        trAddition.appendChild(tdType);

        var tdFecs = document.createElement('td');
        tdFecs.innerHTML = "" + obj.fecs;
        tdFecs.className += "center-align";
        trAddition.appendChild(tdFecs);

        var tdFect = document.createElement('td');
        tdFect.innerHTML = "" + obj.fect;
        tdFect.className += "center-align";
        trAddition.appendChild(tdFect);

        var tdSelect = document.createElement('td');
        tdSelect.className += "center-align";
        tdSelect.innerHTML = '<input type="checkbox" class="filled-in" id="CHK' + (i + 1) + '" data-index="' + i + '" checked="checked" />'
                + '<label for="CHK' + (i + 1) + '"></label>';

//        var chkSelect = document.createElement('input');
//        chkSelect.type = "checkbox"
//        chkSelect.className = "filled-in";
//        chkSelect.id = "CHK" + (i + 1);
//
//        var lblChk = document.createElement('label');
//        lblChk.for = "CHK" + (i + 1);
//
//        tdSelect.appendChild(chkSelect);
//        tdSelect.appendChild(lblChk);

        trAddition.appendChild(tdSelect);
        contractTable.appendChild(trAddition);
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
            contractString += contractObj.num + "|";//0
            contractString += contractObj.tip + "|";//1
            contractString += contractObj.fecs + "|";//2
            contractString += contractObj.fect + "|";//3
            contractString += contractObj.val + "|";//4
            contractString += contractObj.obj + "|";//5
            contractString += contractObj.bd + "|";//6
            contractString += contractObj.cod;//7

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


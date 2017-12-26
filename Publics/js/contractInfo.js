emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
contractorData = new Array();
contractData = "";

function onLoadBody(jsonContracts) {

    var nomGetted = false;
    var contractTable = document.getElementById("contractTable");

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

        contractTable.appendChild(trAddition);

        contractData += obj.num + "|";
        contractData += obj.tip + "|";
        contractData += obj.fecs + "|";
        contractData += obj.fect + "|";
        contractData += obj.val + "|";
        contractData += obj.obj + "|";
        contractData += obj.bd;

        contractData += "@sltlnr";
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
    dataInput.value = contractData;
    mapForm.appendChild(dataInput);

    document.body.appendChild(mapForm);
    mapForm.submit();

}


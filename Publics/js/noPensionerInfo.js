emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
noPensionerData = new Array();

function onLoadBody(jsonPerson) {

    $(document).ready(function () {

    });

    noPensionerData.push(jsonPerson[0].id);//0
    noPensionerData.push(jsonPerson[0].nom);//1
    noPensionerData.push(jsonPerson[0].doc);//2
    noPensionerData.push(jsonPerson[0].doctype);//3
    noPensionerData.push(jsonPerson[0].sex);//4    
    noPensionerData.push(jsonPerson[0].email);//5

    document.getElementById("tdName").innerHTML = jsonPerson[0].nom;
    document.getElementById("tdDoc").innerHTML = jsonPerson[0].doc;
    if (jsonPerson[0].email != null && jsonPerson[0].email.trim() != "") {
        document.getElementById("tdEmail").innerHTML = jsonPerson[0].email;
    } else {
        document.getElementById("tdEmail").style.display = "none";
        document.getElementById("divEmailMsg").style.display = "none";
    }

}

function generateCert() {

    var emailId = document.getElementById("emailId");

    if ((noPensionerData[5] == null || noPensionerData[5] == "") && emailId.value.trim() == "") {
        alert("Debe ingresar su correo electrónico.");
        return;
    }

    if (emailId.value.trim() != "" && !emailRegex.test(emailId.value)) {
        alert("El email ingresado no es válido.");
        return;
    }

    if ((noPensionerData[5] == null || noPensionerData[5] == "") || emailId.value != "") {
        noPensionerData[5] = emailId.value;
    }

    var mapForm = document.createElement("form");
    mapForm.style.display = "none";
    mapForm.target = "Map";
    mapForm.method = "POST";
    mapForm.action = "http://localhost/Celab/indexBoth.php";
    var typeInput = document.createElement("input");
    typeInput.type = "text";
    typeInput.name = "opModel";
    typeInput.value = "CERT_NO_PENSIONER";
    mapForm.appendChild(typeInput);
    var cDataInput = document.createElement("input");
    cDataInput.type = "text";
    cDataInput.name = "noPensionerData";
    cDataInput.value = noPensionerData;
    mapForm.appendChild(cDataInput);
    document.body.appendChild(mapForm);
    mapForm.submit();
    
}
function onLoadBody(jsonContracts) {

    var contractData = jsonContracts;
    var nomGetted = false;
    var contractTable = document.getElementById("contractTable");

    for (var i = 0; i < contractData.length; i++) {
        var obj = contractData[i];

        if (!nomGetted) {
            nomGetted = true;

            document.getElementById("tdName").innerHTML = obj.nom;
            document.getElementById("tdDoc").innerHTML = obj.doc;
            document.getElementById("tdEmail").innerHTML = obj.email;
            
            if(obj.email != null && obj.email != ""){
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

        console.log(obj);
    }

}


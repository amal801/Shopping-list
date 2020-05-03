
var xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onreadystatechange = function(){
    console.log("xhttp",xhttp);
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        console.log(response);
        var Jshopping = response.shopping;
        var output = "<table class='table table-bordered table-striped'><tr><th>Serial No</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
        
        for(i=0;i<Jshopping.length;i++){
            output +="<tr><td>"+Jshopping[i].SerialNo+"</td><td>"+Jshopping[i].Name+"</td><td>"+Jshopping[i].Quantity+"</td><td>"+Jshopping[i].Unit+"</td><td>"+Jshopping[i].Department+"</td><td>"+Jshopping[i].Notes+"</td></tr>";
        }
        output += "</table>";
        document.getElementById("shopping").innerHTML = output;
        console.log(output);
    }
}
xhttp.open("GET","shopping.json",true);
xhttp.send();

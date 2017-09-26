function onlyAlphaNumeric(field){
	var valid_char='0123456789abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ';
	var num = field.value;
	for(i=0;i < num.length;i++){
		var the_char=num.charAt(i)
		if(valid_char.indexOf(the_char)==-1){
			//alert("Este campo solo acepta letras y numeros. \n  - Porfavor verifica el dato ingresado.");
			num=num.substring(0,i);
		}
	}
	if(field.value!=num){ 
        field.value=num;
    }
}

function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
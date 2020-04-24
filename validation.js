document.forms["connexion"].addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this;
 
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez remplir tous les champs";
			break;
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Merci de nous avoir fournis vos données!');
	}
	
});

    


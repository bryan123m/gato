var fabricaDeGatos = function(patas, colorpelaje) {
	this.patas = patas;
	this.colorpelaje = colorpelaje;

	this.hablar = function () {
		alert("miauuu...miauuu");
	}
}


//felix el gato
var felix = new fabricaDeGatos(2,'#000');
felix.hablar = function() {
	alert ('soy felix');
}

felix.hablar();

var garfield = new fabricaDeGatos(4,"#f37c22");

garfield.hablar();

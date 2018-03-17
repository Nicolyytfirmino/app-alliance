var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var endInput = document.getElementById('endInput');
var bairInput = document.getElementById('bairInput');
var ufInput = document.getElementById('ufInput');
var phoneInput = document.getElementById('phoneInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');


var addButton = document.getElementById('addButton')

addButton.addEventListener('click', function(e){ 	/*addEventListener= escutando um evento*/
	e.preventDefault();
		inserir(nameInput.value, ageInput.value, endInput.value, bairInput.value, ufInput.value, phoneInput.value, emailInput.value, passwordInput.valeu);
})

function inserir(name, age){
	var data = { nome: name, idade: age }
	return firebase.database().ref().child('cadastro').push(data)
}
// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .SignUp').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  /*var displayName = $$('.toolbar-inner').innerText;*/
  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);

  firebase 
    .auth()
    .createUserWithEmailAndPassword(username,password)
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text('Bem vindo: ' + username);

    })

    .catch( function(error){
      console.error(error.code)
      console.error(error.message)
      app.dialog.alert('Falha ao cadastrar, verifique o error no console');
      this.$$('.toolbar-inner').text('Bem vindo:'+username);

    })  
});

// Sign Out (Sair)
$$('#my-login-screen .SignOut').on('click', function () {
  app.loginScreen.close('#my-login-screen');
  $$('input#emailInput').val('');
  $$('input#passwordInput').val('');
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      app.loginScreen.close('#my-login-screen');
      $$('.logoff').hide();
      $$('.login-screen-open').show();      
    }, function(error){
      console.error(error)
    })
});
$$('#my-login-screen .login-screen-close').on('click', function () {
  $$('input#emailInput').val('');
  $$('input#passwordInput').val('');
})
$$('.logoff').on('click', function () {
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      $$('input#emailInput').val('');
      $$('input#passwordInput').val('');
      $$('.logoff').hide();
      $$('.login-screen-open').show();
    }, function(error){
      console.error(error)
    })  
})

// CADASTRAR

var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var addressInput = document.getElementById('addressInput');
var bairInput = document.getElementById('bairInput');
var cidInput = document.getElementById('cidInput');
var ufInput = document.getElementById('ufInput');
var phoneInput = document.getElementById('phoneInput');
var selectbasic = document.getElementById('selectbasic');
var comInput = document.getElementById('comInput');
var metragemInput = document.getElementById('metragemInput');


var addButton = document.getElementById('addButton')

addButton.addEventListener('click', function(e){ 	/*addEventListener= escutando um evento*/
	e.preventDefault();
    inserir(nameInput.value, emailInput.value, addressInput.value, bairInput.value, cidInput.value, ufInput.value, phoneInput.value, selectbasic.value, comInput.value, metragemInput.value);
})

function inserir(name, emailInput, addressInput, bairInput, cidInput, ufInput, phoneInput, selectbasic, comInput, metragemInput){
	var data = { nome: name, email: emailInput, endereco: addressInput, bairro: bairInput, cidade:cidInput, estado: ufInput, telefone: phoneInput, finalidade: selectbasic, comodo: comInput, metragem: metragemInput }
	return firebase.database().ref().child('usuarios').push(data)
} 

//Acompanhe seu pedido
var app = new Framework7();

var $$ = Dom7;

// Set progress on inline progressbar
$$('.set-inline-progress').on('click', function (e) {
  var progress = $$(this).attr('data-progress');
  app.progressbar.set('#demo-inline-progressbar', progress);
});


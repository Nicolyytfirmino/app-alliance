$$(document).on('page:init','.page[data-name="form-user"]', function(e){
    var page = e.detail;
    console.log(page.name);
    $$('#btnSalvar').on('click',function () {

            //var formData = app.form.convertToData('#form-user-content')
            var nameInput = $$('#nameInput').val();
            var emailInput = $$('#emailInput').val();
            var phoneInput = $$('#phoneInput').val();
            var assuntoInput = $$('#assuntoInput').val();
            var inputBio = $$('#inputBio').val();
            
            var formData = { nome: nameInput, email: emailInput, telefone: phoneInput, assunto: assuntoInput, bio: inputBio }
            console.log(formData);
            alert(JSON.stringify(formData))
            firebase.database().ref().child('contato').push(formData)
            .then( function () {
                    app.dialog.alert('Usuário inserido');
                    $$('input#nameInput').val('');
                    $$('input#emailInput').val('');
                    $$('input#phoneInput').val('');
                    $$('input#assuntoInput').val('');
                    $$('input#inputBio').val('');
                    
            }, function(error){
                    app.dialog.alert('Erro, confira no console');
                    console.error(error)
            })  
                                
            //firebase.database().ref().child('usuarios').push(JSON.stringify(formData))

    });      

});      

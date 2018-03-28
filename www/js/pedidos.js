var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_produtos"]', function (e) {
    firebase.database().ref('estoque').on('value', function (snapshot){
        $$("#userList").empty();

        snapshot.forEach(function(item){
            var listHtml = '<div class="row block block-strong">';
            listHtml += '<div class="col-25">'+ item.val().nome + '</div>';
            listHtml += '<div class="col-25">'+ item.val().pedido + '</div>';
            listHtml += '<div class="col-25">'+ item.val().status + '</div>';
            listHtml += '<div class="col-25">'+ item.val().finalidade + '</div>';
        })
    })
});
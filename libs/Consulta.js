define('Consulta', ['Tributacao'], function(Tributacao){

    return Tributacao.extend({

        init: function(){},


        nome: 'Fernando',

        teste: function () {

            alert(this.nome);

        }
    });

});
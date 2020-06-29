function consultaCep (){

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log (cep);
    console.log (url);


    $.ajax({

        url: url,
        type: "GET", 
        
        success: function (response) {
            console.log(response);
            $("#logradouro").html(response.logradouro)
            $("#cidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#bairro").html(response.bairro)
            $("#titulo_cep").html("CEP " + response.cep)
            //document.getElementById("logradouro").innerHTML = response.logradouro;

        }

    })




}
function validar_registro(){

    var nome = document.getElementById("Nome");
    var sobrenome = document.getElementById("Sobrenome");
    var email = document.getElementById("Email");
    var senha = document.getElementById("Senha");

    if(nome.value == ""){

        alert("Nenhum nome identificado");

    } else if(sobrenome.value == ""){
        
        alert("Nenhum sobrenome identificado");

    } else if(email.value == ""){

        alert("Nenhum email identificado");

    } else if(senha.value == ""){

        alert("Nenhuma senha identificada");
        senha.focus();

    }

}
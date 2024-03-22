function validar_campos_login(){


    var email = login.email;
    var senha = login.senha;


    if(email.value == ""){

       alert("Nenhum email identificado");

       email.focus();
       
    }
    else if(senha.value == "") {

        alert("Nenhuma senha fornecida");

        senha.focus();
    }
}
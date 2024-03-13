function validar_campos_login(){


    var email = login.email;
    var senha = login.senha;


    if(email.value == ""){

       alert("E-mail não fornecido");

       email.focus();
       
    }
    else if(senha.value == "") {

        alert("Senha não fornecida");

        senha.focus();
    }
}
import {registrarUsuario} from "./requests.js"
const _userName = document.getElementById("userName") ,
_email =  document.getElementById("email"),
_password = document.getElementById("password")


document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    registrarUsuario(_userName.value, _email.value, _password.value);
    _userName.value = "", _email.value  = "", _password.value = ""
     Swal.fire({
        title: "OK!",
        text: "Registrado Exitosamente",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed == true)
        {
            window.location.href = "../HTML/login.html"
        }
        
      }).catch((err) => {
        console.error(err);
      });;

      

    
    //   

})


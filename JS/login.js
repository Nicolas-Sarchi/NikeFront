import  {loggearUsuario} from "./requests.js"

const userName = document.getElementById("userName"),
password = document.getElementById("password")


document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    loggearUsuario(userName.value,  password.value);
    userName.value = "",  password.value = ""
     

      window.location.href = "../index.html"

    
    

})
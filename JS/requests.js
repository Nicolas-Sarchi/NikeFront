const URL = 'http://localhost:5088/api'

export async function registrarUsuario (userName, email, password){
    try {
        await fetch(`${URL}/User/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName, 
            email, 
            password
          }),
        });

      } catch (error) {
        console.error(error);
      }
}
export async function loggearUsuario (userData){
    try {
        await fetch(`${URL}/User/token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      } catch (error) {
        console.error(error);
      }
}




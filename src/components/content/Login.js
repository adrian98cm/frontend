import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

function capturar() {
  console.log("capturado");
  const emailCapturado = document.getElementById("emailIntroducido").value;
  console.log("Email: " + emailCapturado);
  const contrasenaCapturada = document.getElementById("contrasenaIntroducida")
    .value;
  console.log("Contraseña: " + contrasenaCapturada);
}

const Login = (props) => {
  const [login, { loading, error, data }] = useMutation(LOGIN_USER);

 // if (loading) return "Loading..."; Haciendolo así limpia el input, y no podría utuilizar el username para luego guardarlo en el navegador
  if (error) return `Error! ${error.message}`;

  const _saveUserData = (username, userAuthtoken) => {
    localStorage.setItem("username", username);
    localStorage.setItem("userAuthtoken", userAuthtoken);
  };

  return (
    <div className="App-header">
      email:
      <input type="text" id="emailIntroducido" />
      Contraseña:
      <input type="text" id="contrasenaIntroducida" />
      <button
        className="boton_personalizado"
        onClick={
          //capturar,console.log(typeof(data)),

          (e) => {
            e.preventDefault();
            login({
              variables: {
                email: document.getElementById("emailIntroducido").value,
                password: document.getElementById("contrasenaIntroducida")
                  .value,
              },
            });
          }
        }
      >
        Iniciar sesión
      </button>
      <button
        className="boton_personalizado"
        onClick={(e) => {
          _saveUserData(
            document.getElementById("emailIntroducido").value,
            data.login
          );
        }}
      >
        Guardar credenciales en el navegador
      </button>
      Importante guardar credenciales para mantener la sesión iniciada
    </div>
  );
};

export default Login;

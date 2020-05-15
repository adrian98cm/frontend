import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const SIGNUP_USER = gql`
  mutation addUser($email: String!, $password: String!, $autor: Int!) {
    addUser(email: $email, password: $password, autor: $autor) {
      token
    }
  }
`;

const SignUp = (props) => {
  const [addUser, { loading, error, data }] = useMutation(SIGNUP_USER);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const confirm = <div>REGISTRADO!!!!</div>;

  return (
    <div className="App-header">
      email:
      <input type="text" id="emailIntroducido" />
      Contraseña:
      <input type="text" id="contrasenaIntroducida" />
      <button
        className="boton_personalizado"
        onClick={(e) => {
          e.preventDefault();
          addUser({
            variables: {
              email: document.getElementById("emailIntroducido").value,
              password: document.getElementById("contrasenaIntroducida").value,
              autor: 0,
            },
          });
        }}
      >
        Registrarse
      </button>
      Hazte socio de nuestro gimnasio
      <p>¡Podrás acceder a todos nuestros entrenamientos!</p>
    </div>
  );
};

export default SignUp;

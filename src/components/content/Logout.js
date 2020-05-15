import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LOGOUT_USER = gql`
  mutation logout($email: String!, $token: ID!) {
    logout(email: $email, token: $token)
  }
`;

const Logout = (props) => {
  const [logout, { data }] = useMutation(LOGOUT_USER);

  const _saveUserData = (username, userAuthtoken) => {
    localStorage.setItem("username", username);
    localStorage.setItem("userAuthtoken", userAuthtoken);
  };

  return (
    <div className="App-header">
      <button
        className="boton_personalizado"
        onClick={(e) => {
          e.preventDefault();
          logout({
            variables: {
              email: localStorage.getItem("username"),
              token: localStorage.getItem("userAuthtoken"),
            },
          });
        }}
      >
        Confirm Log Out
      </button>

      <button
        className="boton_personalizado"
        onClick={(e) => {
          _saveUserData(null, null);
        }}
      >
        Guardar credenciales en el navegador
      </button>
      Importante guardar credenciales para cerrar la sesión completamente
    </div>
  );
};

export default Logout;

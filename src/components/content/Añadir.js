import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import "../../containers/App.css";

const ADD_ENTRENAMIENTO = gql`
  mutation addEntrada(
    $titulo: String!
    $descripcion: String!
    $email: String!
    $token: ID!
  ) {
    addEntrada(
      titulo: $titulo
      descripcion: $descripcion
      email: $email
      token: $token
    ) {
      _id
      titulo
      descripcion
    }
  }
`;

function capturar() {
  console.log("capturado");
  const tituloCapturado = document.getElementById("tituloIntroducido").value;
  console.log("Título: " + tituloCapturado);
  const descripcionCapturada = document.getElementById("descripcionIntroducida")
    .value;
  console.log("Descripción: " + descripcionCapturada);
}

const Añadir = (props) => {
  const [addEntrada, { loading, error, data }] = useMutation(ADD_ENTRENAMIENTO);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App-header">
      Título:
      <input type="text" id="tituloIntroducido" />
      Descripción:
      <input type="text" id="descripcionIntroducida" />
      <button
        className="boton_personalizado"
        onClick={
          (capturar,
          console.log(data),
          (e) => {
            e.preventDefault();
            addEntrada({
              variables: {
                titulo: document.getElementById("tituloIntroducido").value,
                descripcion: document.getElementById("descripcionIntroducida")
                  .value,
                email: localStorage.getItem("username"),
                token: localStorage.getItem("userAuthtoken"),
              },
            });
          })
        }
      >
        Añadir entrenamiento
      </button>
      Recuerda iniciar sesión como administrador para poder añadir
      entrenamientos
    </div>
  );
};

export default Añadir;

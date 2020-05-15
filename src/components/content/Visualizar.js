import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";

const TEST = gql`
  {
    test
  }
`;

const GET_DATA = gql`
  query GetEntradas($email: String!, $token: ID!) {
    getEntradas(email: $email, token: $token) {
      titulo
      descripcion
    }
  }
`;

const Visualizar = (props) => {
  const [getEntradas, { loading, error, data }] = useLazyQuery(GET_DATA);

  return (
    <div className="App-header">
      <button
        className="boton_personalizado"
        onClick={(e) => {
          getEntradas({
            variables: {
              email: localStorage.getItem("username"),
              token: localStorage.getItem("userAuthtoken"),
            },
          });
        }}
      >
        Obtener datos
      </button>
      <button
        className="boton_personalizado"
        onClick={(e) => {
          const listitem = data.getEntradas.map((entrada) => (
            <div>
              <ul>Titulo: {entrada.titulo}</ul>
              <ul>Descripción: {entrada.descripcion}</ul>
            </div>
          ));
        }}
      >
        Mostrar entrenamientos
      </button>

      <button
        className="boton_personalizado"
        onClick={(e) => {
          console.log(
            data.getEntradas.map((entrada) => ({
              Titulo: entrada.titulo,
              Descripción: entrada.descripcion,
            }))
          );
        }}
      >
        Mostrar entrenamientos por consola
      </button>
      Antes de mostrar los entrenamientos, hay que obtener datos
    </div>
  );
};

export default Visualizar;

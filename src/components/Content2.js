import React, { Component } from "react";
import Inicio from "../components/content/Inicio";
import Añadir from "../components/content/Añadir";
import Visualizar from "../components/content/Visualizar";
import Login from "../components/content/Login";
import SignUp from "../components/content/SignUp";
import Logout from "../components/content/Logout";

import "../containers/App.css";

class Content2 extends Component {
  constructor(props) {
    super(props);
  }

  checkHandler = () => {
    console.log("Jala yyy");
    console.log(this.props.escenaSeleccionada);
  };

  render() {
    if (this.props.escenaSeleccionada === 1) {
      return <Añadir></Añadir>;
    }
    if (this.props.escenaSeleccionada === 2) {
      return <Visualizar></Visualizar>;
    }
    if (this.props.escenaSeleccionada === 3) {
      return <SignUp></SignUp>;
    }
    if (this.props.escenaSeleccionada === 4) {
      return <Login></Login>;
    }
    if (this.props.escenaSeleccionada === 5) {
      return <Logout></Logout>;
    }

    if (this.props.escenaSeleccionada === 0) {
      return <div>Bienvenido a ACM GYM</div>;
    }
  }
}
export default Content2;

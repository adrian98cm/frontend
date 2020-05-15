import React, { Component, setState } from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content2 from "../components/Content2";
import reactlogo from "../../src/logo.svg";

class App extends Component {
  state = {
    escena: 0,
  };

  addHandler = () => {
    this.setState({
      escena: 1,
    });
  };

  entrenamientosHandler = () => {
    this.setState({
      escena: 2,
    });
  };

  signupHandler = () => {
    this.setState({
      escena: 3,
    });
  };

  loginHandler = () => {
    this.setState({
      escena: 4,
    });
  };

  logoutHandler = () => {
    this.setState({
      escena: 5,
    });
  };

  checkHandler = () => {
    this.setState({
      escena: 6,
    });
  };

  render() {
    return (
      <div className="App-header">
        <header>
          <button className="boton_personalizado" onClick={this.addHandler}>
            Añadir
          </button>
          <button
            className="boton_personalizado"
            onClick={this.entrenamientosHandler}
          >
            Ver entrenamientos
          </button>
          <img className="App-logo" src={reactlogo} />
          <button className="boton_personalizado" onClick={this.signupHandler}>
            Sign Up
          </button>
          <button className="boton_personalizado" onClick={this.loginHandler}>
            Log in
          </button>
          <button className="boton_personalizado" onClick={this.logoutHandler}>
            Log out
          </button>
        </header>
        <Content2 escenaSeleccionada={this.state.escena} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

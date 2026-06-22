import { Router, Route, Switch } from "wouter";
import Listado from "./componentes/Listado.jsx";
import Formulario from "./componentes/Formulario.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./componentes/header.jsx";
import axios from "axios";

export default function App() {
  useEffect(() => {
    const url = "https://backend-septimos.ctpoba.edu.ar/api";
    axios
      .get(url)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/nueva">
            <Formulario />
          </Route>

          <Route path="/listado">
            <Listado />
          </Route>

          <Route path="/">
            <h1>Hola mundo! Soy APP!</h1>
          </Route>

          <Route>
            <h1>Pagina no encontrada - error 404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

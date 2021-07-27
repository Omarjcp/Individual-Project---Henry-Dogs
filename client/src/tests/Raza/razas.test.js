import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/index";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { Navbar } from "../../componentes/navbar/index";
import { NuevaRaza } from "../../componentes/crear/index";

test("Renderiza Inicio", () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/Ver Perritos/i)).toBeInTheDocument();
});

test("Existe placeholder 'Buscar por raza...' en el componente Navbar", () => {
  const history = createMemoryHistory();
  const setPagina = 0;
  history.push("/principal");
  render(
    <Provider store={store}>
      <Router history={history}>
        <Navbar setPagina={setPagina} />
      </Router>
    </Provider>
  );
  expect(screen.getByPlaceholderText("Buscar por raza..."));
});

test("Renderiza el formulario y verificar que exista un label 'Nombre'", () => {
  const history = createMemoryHistory();
  history.push("/crear-raza");
  render(
    <Provider store={store}>
      <Router history={history}>
        <NuevaRaza />
      </Router>
    </Provider>
  );
  expect(screen.getByLabelText("Nombre"));
});

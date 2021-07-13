import { Route } from "react-router-dom";
import "./App.css";

import { Inicio } from "./componentes/inicio/index";
import { Principal } from "./componentes/principal/index";
import { Detalle } from "./componentes/detalles/index";
import { NuevaRaza } from "./componentes/crear/index";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <Inicio />} />

      <Route path="/principal" render={() => <Principal />} />

      <Route path="/raza/:id" render={() => <Detalle />} />

      <Route path="/crear-raza" render={() => <NuevaRaza />} />
    </>
  );
}

export default App;

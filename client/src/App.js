import { Route } from "react-router-dom";
import "./App.css";

import { Inicio } from "./componentes/inicio/index";
import { Principal } from "./componentes/principal/index";
import { Detalle } from "./componentes/detalles/index";
import { NuevaRaza } from "./componentes/crear/index";
import { NuevoTemperamento } from "./componentes/crearTemp";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <Inicio />} />

      <Route exact path="/principal" render={() => <Principal />} />

      <Route path="/raza/:id" render={() => <Detalle />} />

      <Route path="/crear-raza" render={() => <NuevaRaza />} />

      <Route path="/crear-temperamento" render={() => <NuevoTemperamento />} />
    </>
  );
}

export default App;

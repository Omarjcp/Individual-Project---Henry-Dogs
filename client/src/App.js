import { Route } from "react-router-dom";
import "./App.css";

import { Inicio } from "./componentes/inicio/index";
import { Principal } from "./componentes/principal/index";
import { Detalle } from "./componentes/detalles/index";
import { NuevaRaza } from "./componentes/crear/index";
import { RazaPorNombre } from "./componentes/principal/razaPorNombre/index";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <Inicio />} />

      <Route exact path="/principal" render={() => <Principal />} />

      <Route exact path="/principal/:pag" render={() => <Principal />} />

      <Route
        exact
        path="/principal/:pag/:name"
        render={() => <RazaPorNombre />}
      />

      <Route path="/raza/:id" render={() => <Detalle />} />

      <Route path="/crear-raza" render={() => <NuevaRaza />} />
    </>
  );
}

export default App;

import { Raza } from "./raza";
import { Navbar } from "../navbar";
import { Select } from "./selectOrdenar";
import {
  obtenerPorPag,
  obtenerRazas,
  obtenerTemperamentos,
  obtenerPorNombre,
  obtenerPorTemperamento,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Paginado } from "./paginado";
import { Filtrado } from "./filtrado";

// import { } from "./styled";

export const Principal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { razas, temperamentos, todasRazas } = useSelector((state) => state);
  let [orden, setOrden] = useState(false);
  let [pagina, setPagina] = useState(0);
  let [temperam, setTemperam] = useState("");

  useEffect(() => {
    dispatch(obtenerPorPag(0));
    dispatch(obtenerTemperamentos());
    dispatch(obtenerRazas());
  }, []);

  function regresar() {
    history.go(0);
  }

  function handlerSelect(e) {
    const { value } = e.target;
    setTemperam(e.target.value);
    setPagina(0);
    if (value === "todos") {
      history.go(0);
    } else {
      dispatch(obtenerPorTemperamento({ temperamento: value, pag: 0 }));
    }
  }

  return (
    <div>
      <Navbar path={regresar} setPagina={setPagina} setTemperam={setTemperam} />

      <div style={{ marginTop: "5rem" }}>
        <Select pagina={pagina} setOrden={setOrden} temperam={temperam} />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h4 style={{ margin: ".5rem", marginBottom: "1rem" }}>
            Filtrar por:
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "10rem",
              height: "10vh",
            }}
          >
            <select onChange={handlerSelect}>
              <option value={0} selected>
                Temperamentos
              </option>
              <option value="todos">Todos</option>
              {temperamentos.map((temperamento) => {
                return <option value={temperamento}>{temperamento}</option>;
              })}
            </select>
          </div>

          <Filtrado todasRazas={todasRazas} setPagina={setPagina} />
        </div>

        <Raza razas={razas} />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <Paginado setPagina={setPagina} orden={orden} temperam={temperam} />
      </div>
    </div>
  );
};

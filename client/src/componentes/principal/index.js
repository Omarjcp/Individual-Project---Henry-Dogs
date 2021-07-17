import { Raza } from "./raza";
import { Navbar } from "../navbar";
import { Select } from "./selectOrdenar";
import { obtenerPorPag } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Paginado } from "./paginado";

// import { } from "./styled";

export const Principal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { razas } = useSelector((state) => state);
  let [orden, setOrden] = useState(false);
  let [pagina, setPagina] = useState(0);

  useEffect(() => {
    dispatch(obtenerPorPag(0));
  }, []);

  function regresar() {
    history.go(0);
  }

  return (
    <div>
      <Navbar path={regresar} setPagina={setPagina} pagina={pagina} />

      <div style={{ marginTop: "5rem" }}>
        <Select pagina={pagina} setOrden={setOrden} />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h4>Filtrar por:</h4>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Temperamentos</span>
            <label>
              <a href="#">triste</a>
            </label>
            <label>
              <a href="#">enojon</a>
            </label>
            <label>
              <a href="#">feliz</a>
            </label>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Razas</span>
            <label>
              <a href="#">pudul</a>
            </label>
            <label>
              <a href="#">pitbul</a>
            </label>
            <label>
              <a href="#">chauchau</a>
            </label>
          </div>
        </div>
        <Raza razas={razas} />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <Paginado setPagina={setPagina} orden={orden} />
      </div>
    </div>
  );
};

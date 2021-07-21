import { Raza } from "./raza";
import { Navbar } from "../navbar";
import { Select } from "./selectOrdenar";
import {
  obtenerPorPag,
  obtenerRazas,
  obtenerTemperamentos,
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
  let { razas, todasRazas } = useSelector((state) => state);
  let [orden, setOrden] = useState(false);
  let [pagina, setPagina] = useState(0);
  let [temperam, setTemperam] = useState("");

  useEffect(() => {
    dispatch(obtenerPorPag(0));
    dispatch(obtenerTemperamentos());
    dispatch(obtenerRazas());
  }, []);

  return (
    <div>
      <Navbar setPagina={setPagina} setTemperam={setTemperam} />

      <div style={{ marginTop: "5rem" }}>
        <Select pagina={pagina} setOrden={setOrden} temperam={temperam} />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Filtrado
          todasRazas={todasRazas}
          setPagina={setPagina}
          setTemperam={setTemperam}
        />

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

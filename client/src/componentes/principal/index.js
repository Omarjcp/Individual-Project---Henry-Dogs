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
import { Paginado } from "./paginado";
import { Filtrado } from "./filtrado";

import { DivContenedor } from "./styled";
import { Loading } from "../loader/loading";

export const Principal = () => {
  const dispatch = useDispatch();
  let { razas, todasRazas } = useSelector((state) => state);
  let [orden, setOrden] = useState(false);
  let [pagina, setPagina] = useState(0);
  let [temperam, setTemperam] = useState("");

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(obtenerPorPag(0));
    dispatch(obtenerTemperamentos());
    dispatch(obtenerRazas());

    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <DivContenedor>
        <Navbar setPagina={setPagina} />

        <div style={{ marginTop: "3.7rem", padding: "1rem" }}>
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
          style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
        >
          <Paginado setPagina={setPagina} orden={orden} temperam={temperam} />
        </div>
      </DivContenedor>
    );
  }
};

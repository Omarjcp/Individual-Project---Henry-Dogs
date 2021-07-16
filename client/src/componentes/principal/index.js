import { Raza } from "./raza";
import { Navbar } from "../navbar";
import {
  obtenerPorNombre,
  obtenerPorPag,
  obtenerParaOrdenar,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

// import { } from "./styled";

export const Principal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { razas, longitud, busqueda } = useSelector((state) => state);
  let [orden, setOrden] = useState(false);
  let [pagina, setPagina] = useState(0);

  useEffect(() => {
    dispatch(obtenerPorPag(0));
  }, []);

  let paginas = Math.ceil(longitud / 8);
  let arrayPaginas = [];

  for (let i = 1; i <= paginas; i++) {
    arrayPaginas.push(i);
  }

  function handlerSelect(e) {
    const { value } = e.target;
    switch (value) {
      case "3":
        setOrden(false);
        if (busqueda) {
          console.log("caso 3 a-z", value, busqueda, pagina);
          return dispatch(
            obtenerPorNombre({ orden: value, nombre: busqueda, pagina: pagina })
          );
        } else {
          return dispatch(obtenerPorPag(pagina));
        }

      case "4":
        setOrden(value);
        if (busqueda) {
          console.log("caso 4 z-a", value, busqueda, pagina);
          return dispatch(
            obtenerPorNombre({ orden: value, nombre: busqueda, pagina: pagina })
          );
        } else {
          return dispatch(obtenerParaOrdenar(value, pagina));
        }

      default:
        break;
    }
  }

  function regresar() {
    history.go(0);
  }

  return (
    <div>
      <Navbar path={regresar} setPagina={setPagina} />
      <div style={{ marginTop: "5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "90%",
          }}
        >
          <select
            name="filtrado"
            onChange={handlerSelect}
            style={{ width: "12rem", height: "1.5rem" }}
          >
            <option disabled selected>
              Ordenar por
            </option>
            <option value="1">Mayor peso</option>
            <option value="2">Menor peso</option>
            <option value="3">Raza A-Z</option>
            <option value="4">Raza Z-A</option>
          </select>
        </div>
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
        {arrayPaginas.map((pag, i) => (
          <button
            onClick={() => {
              setPagina(i);
              console.log(i);
              if (busqueda) {
                return dispatch(
                  obtenerPorNombre({
                    orden: orden,
                    nombre: busqueda,
                    pagina: i,
                  })
                );
              }
              if (orden) {
                return dispatch(obtenerParaOrdenar(orden, i));
              } else {
                return dispatch(obtenerPorPag(i));
              }
            }}
          >
            {pag}
          </button>
        ))}
      </div>
    </div>
  );
};

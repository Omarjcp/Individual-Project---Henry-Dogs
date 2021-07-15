import { Raza } from "./raza";
import { Navbar } from "../navbar";
import {
  obtenerRazas,
  obtenerPorPag,
  obtenerPorNombre,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import { } from "./styled";

export const Principal = () => {
  const dispatch = useDispatch();
  let { razas, longitud } = useSelector((state) => state);
  let { pag } = useParams();

  useEffect(() => {
    if (pag) {
      dispatch(obtenerPorPag(pag));
    } else {
      dispatch(obtenerRazas());
    }
  }, [pag]);

  let paginas = Math.ceil(longitud / 8);
  let arrayPaginas = [];

  for (let i = 1; i <= paginas; i++) {
    arrayPaginas.push(i);
  }

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "5rem" }}>
        {/* <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch();
              setPerro("");
            }}
          >
            <input
              placeholder="Buscar por raza..."
              value={perro}
              onChange={handlePerro}
            />
            {!perro ? (
              <button disabled>Buscar</button>
            ) : (
              <Link to={`/principal/${0}/${perro}`}>
                <button type="submit">Buscar</button>
              </Link>
            )}
          </form>
        </div> */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "90%",
          }}
        >
          <select name="filtrado" style={{ width: "12rem", height: "1.5rem" }}>
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
          <Link
            to={`/principal/${i}`}
            style={{ margin: ".5rem", textDecoration: "none" }}
          >
            {pag}
          </Link>
        ))}
      </div>
    </div>
  );
};

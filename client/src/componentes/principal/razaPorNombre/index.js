import { Raza } from "../raza";
import { Navbar } from "../../navbar";
import { obtenerPorNombre } from "../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const RazaPorNombre = () => {
  let { razas, longitud } = useSelector((state) => state);
  let { name } = useParams();

  let paginas = Math.ceil(longitud / 8);
  let arrayPaginas = [];

  for (let i = 1; i <= paginas; i++) {
    arrayPaginas.push(i);
  }

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "5rem" }}>
        <div>
          <div>
            <select name="filtrado">
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
              to={`/principal/${i}/${name}`}
              style={{ margin: ".5rem", textDecoration: "none" }}
            >
              {pag}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

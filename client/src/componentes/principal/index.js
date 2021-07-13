import { Raza } from "./raza";
import { Link } from "react-router-dom";

export const Principal = () => {
  return (
    <div>
      <div>
        <div>
          <input placeholder="Buscar por raza..." />
        </div>

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
      </div>

      <Raza />
    </div>
  );
};

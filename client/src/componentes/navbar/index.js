import { Img, Linknav, NavB, ContenedorBuscador } from "./styled";
import Icono from "./iconsmall.png";
import { obtenerPorNombre } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const Navbar = ({ path, setPagina, setTemperam }) => {
  const dispatch = useDispatch();
  let [perros, setPerros] = useState("");

  let handlePerro = (e) => {
    setPerros(e.target.value);
  };

  let onSearch = () => {
    dispatch(obtenerPorNombre({ nombre: perros, pagina: 0 }));
  };

  return (
    <>
      <NavB>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Link to="/">
              <Img src={Icono} />
            </Link>
          </div>

          <div style={{ marginLeft: "2rem" }}>
            <button onClick={path}>Inicio</button>
            <Linknav to="/crear-raza">Crear Raza</Linknav>
          </div>
        </div>

        <ContenedorBuscador>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch();
              setPagina(0);
              setPerros("");
              setTemperam(false);
            }}
          >
            <input
              type="search"
              placeholder="Buscar por raza..."
              value={perros}
              onChange={handlePerro}
            />

            {perros ? (
              <button type="submit">Buscar</button>
            ) : (
              <button type="submit" disabled>
                Buscar
              </button>
            )}
          </form>
        </ContenedorBuscador>
      </NavB>
    </>
  );
};

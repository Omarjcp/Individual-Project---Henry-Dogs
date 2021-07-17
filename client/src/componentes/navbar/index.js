import { Img, Linknav, NavB, ContenedorBuscador } from "./styled";
import Icono from "./iconsmall.png";
import { obtenerPorNombre } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const Navbar = ({ path, setPagina, pagina }) => {
  const dispatch = useDispatch();
  let { busqueda } = useSelector((state) => state);
  let [perros, setPerros] = useState(busqueda);

  let handlePerro = (e) => {
    setPerros(e.target.value);
  };

  let onSearch = () => {
    dispatch(obtenerPorNombre({ nombre: perros, pagina: 0 }));
    setPerros("");
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
            }}
          >
            <input
              placeholder="Buscar por raza..."
              value={perros}
              onChange={handlePerro}
            />
            {/* ver esto v */}
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

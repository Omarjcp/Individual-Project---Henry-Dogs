import { Img, Linknav, NavB, ContenedorBuscador } from "./styled";
import Icono from "./iconsmall.png";
import { obtenerPorNombre } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const Navbar = ({ path, setPagina }) => {
  const dispatch = useDispatch();
  let { busqueda } = useSelector((state) => state);
  let [perros, setPerros] = useState(busqueda);

  let handlePerro = (e) => {
    setPerros(e.target.value);
  };

  let onSearch = () => {
    dispatch(obtenerPorNombre({ nombre: perros }));
    setPerros("");
  };

  return (
    <>
      <NavB>
        <div>
          <Link to="/">
            <Img src={Icono} />
          </Link>
        </div>

        <div style={{ marginLeft: "2rem" }}>
          <button onClick={path}>Inicio</button>
          <Linknav to="/crear-raza">Crear Raza</Linknav>
          {/* <Linknav to="Ranks">Ranks</Linknav>*/}
        </div>

        <ContenedorBuscador>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch();
              setPerros("");
              setPagina(0);
            }}
          >
            <input
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

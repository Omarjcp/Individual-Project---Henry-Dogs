import { Img, Linknav, NavB, ContenedorBuscador } from "./styled";
import Icono from "./iconsmall.png";
import { obtenerPorNombre } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Navbar = ({ setPagina, setTemperam }) => {
  const dispatch = useDispatch();
  let [perros, setPerros] = useState("");
  const history = useHistory();

  let handlePerro = (e) => {
    setPerros(e.target.value);
  };

  let onSearch = () => {
    dispatch(obtenerPorNombre({ nombre: perros, pagina: 0 }));
  };

  let onSubmit = (e) => {
    e.preventDefault();
    onSearch();
    setPagina(0);
    setPerros("");
  };

  function regresar() {
    history.push("/principal");
  }

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
            <Linknav onClick={regresar}>Inicio</Linknav>
            <Linknav to="/crear-raza">Crear Raza</Linknav>
          </div>
        </div>

        <ContenedorBuscador>
          <form onSubmit={onSubmit}>
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

import {
  Img,
  Linknav,
  NavB,
  ContenedorBuscador,
  InputBuscador,
  BotonBuscador,
  Linknavbar,
} from "./styled";
import Icono from "./iconsmall.png";
import { obtenerPorNombre } from "../../redux/actions";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Navbar = ({ setPagina }) => {
  let location = useLocation();
  let { msg } = useSelector((state) => state);
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
    if (location.pathname === "/principal") {
      history.go(0);
    } else {
      history.push("/principal");
      history.go(0);
    }
  }

  useEffect(() => {
    if (msg) {
      alert(msg);
      history.go(0);
    }
  }, [msg]);

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
            <Linknavbar onClick={regresar}>Inicio</Linknavbar>
            <Linknav to="/crear-raza">Crear Raza</Linknav>
          </div>
        </div>

        <ContenedorBuscador>
          <form onSubmit={onSubmit}>
            <InputBuscador
              type="search"
              placeholder="Buscar por raza..."
              value={perros}
              onChange={handlePerro}
            />

            {perros && location.pathname === "/principal" ? (
              <BotonBuscador type="submit">Buscar</BotonBuscador>
            ) : (
              <BotonBuscador type="submit" disabled>
                Buscar
              </BotonBuscador>
            )}
          </form>
        </ContenedorBuscador>
      </NavB>
    </>
  );
};

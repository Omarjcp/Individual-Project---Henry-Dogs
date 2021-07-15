import { Img, Linknav, NavB, ContenedorBuscador } from "./styled";
import Icono from "./iconsmall.png";
import { obtenerPorNombre } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const dispatch = useDispatch();
  let { pag, name } = useParams();
  let [perros, setPerros] = useState("");

  useEffect(() => {
    if (name && pag) {
      dispatch(obtenerPorNombre(name, pag));
      setPerros("");
    }
  }, [name, pag]);

  let handlePerro = (e) => {
    setPerros(e.target.value);
  };

  let onSearch = () => {
    dispatch(obtenerPorNombre(perros));
    setPerros("");
  };

  console.log(perros);

  return (
    <>
      <NavB>
        <div>
          <Link to="/">
            <Img src={Icono} />
          </Link>
        </div>

        <div style={{ marginLeft: "2rem" }}>
          <Linknav to="/principal">Inicio</Linknav>
          <Linknav to="/crear-raza">Crear Raza</Linknav>
          {/* <Linknav to="Ranks">Ranks</Linknav>
          <Linknav to="Maps">Maps</Linknav>
          <Linknav to="Sprays">Sprays</Linknav> */}
        </div>
        <ContenedorBuscador>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch();
              setPerros("");
            }}
          >
            <input
              placeholder="Buscar por raza..."
              value={perros}
              onChange={handlePerro}
            />
            {perros ? (
              <Link to={`/principal/${0}/${perros}`}>
                <button type="submit">Buscar</button>
              </Link>
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

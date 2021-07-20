import { useDispatch, useSelector } from "react-redux";
import {
  obtenerParaOrdenar,
  obtenerPorNombre,
  obtenerPorPag,
  obtenerPorTemperamento,
} from "../../../redux/actions";

export const Select = ({ pagina, setOrden, temperam }) => {
  let { busqueda } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handlerSelect(e) {
    const { value } = e.target;
    switch (value) {
      case "1":
        setOrden(value);
        if (busqueda && !temperam) {
          return dispatch(
            obtenerPorNombre({ orden: value, nombre: busqueda, pagina: pagina })
          );
        }
        if (temperam) {
          return dispatch(
            obtenerPorTemperamento({
              temperamento: temperam,
              pag: pagina,
              orden: value,
            })
          );
        } else {
          return dispatch(obtenerParaOrdenar(value, pagina));
        }

      case "2":
        setOrden(value);
        if (busqueda && !temperam) {
          return dispatch(
            obtenerPorNombre({ orden: value, nombre: busqueda, pagina: pagina })
          );
        }
        if (temperam) {
          return dispatch(
            obtenerPorTemperamento({
              temperamento: temperam,
              pag: pagina,
              orden: value,
            })
          );
        } else {
          return dispatch(obtenerParaOrdenar(value, pagina));
        }

      case "3":
        setOrden(false);
        if (busqueda && !temperam) {
          return dispatch(
            obtenerPorNombre({ orden: value, nombre: busqueda, pagina: pagina })
          );
        }
        if (temperam) {
          return dispatch(
            obtenerPorTemperamento({
              temperamento: temperam,
              pag: pagina,
            })
          );
        } else {
          return dispatch(obtenerPorPag(pagina));
        }

      case "4":
        setOrden(value);
        if (busqueda && !temperam) {
          return dispatch(
            obtenerPorNombre({ orden: value, nombre: busqueda, pagina: pagina })
          );
        }
        if (temperam) {
          return dispatch(
            obtenerPorTemperamento({
              temperamento: temperam,
              pag: pagina,
              orden: value,
            })
          );
        } else {
          return dispatch(obtenerParaOrdenar(value, pagina));
        }

      default:
        break;
    }
  }

  return (
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
  );
};

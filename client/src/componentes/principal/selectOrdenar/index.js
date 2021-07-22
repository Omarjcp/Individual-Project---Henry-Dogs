import { useDispatch, useSelector } from "react-redux";
import {
  obtenerParaOrdenar,
  obtenerPorNombre,
  obtenerPorPag,
  obtenerPorTemperamento,
} from "../../../redux/actions";
import { SelectInput, Opciones } from "./styled";

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
        width: "95%",
      }}
    >
      <SelectInput name="filtrado" onChange={handlerSelect}>
        <option disabled selected hidden>
          Ordenar por
        </option>
        <Opciones value="1">Mayor peso</Opciones>
        <Opciones value="2">Menor peso</Opciones>
        <Opciones value="3">Raza A-Z</Opciones>
        <Opciones value="4">Raza Z-A</Opciones>
      </SelectInput>
    </div>
  );
};

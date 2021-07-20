import { useDispatch, useSelector } from "react-redux";
import {
  obtenerParaOrdenar,
  obtenerPorNombre,
  obtenerPorPag,
  obtenerPorTemperamento,
} from "../../../redux/actions";

export const Boton = ({ setPagina, orden, pag, i, temperam }) => {
  let { busqueda } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        setPagina(i);
        if (busqueda && !temperam) {
          return dispatch(
            obtenerPorNombre({
              orden: orden,
              nombre: busqueda,
              pagina: i,
            })
          );
        }
        if (temperam && orden) {
          return dispatch(
            obtenerPorTemperamento({
              temperamento: temperam,
              pag: i,
              orden: orden,
            })
          );
        }
        if (temperam) {
          return dispatch(
            obtenerPorTemperamento({
              temperamento: temperam,
              pag: i,
            })
          );
        }
        if (orden) {
          return dispatch(obtenerParaOrdenar(orden, i));
        } else {
          return dispatch(obtenerPorPag(i));
        }
      }}
    >
      {pag}
    </button>
  );
};

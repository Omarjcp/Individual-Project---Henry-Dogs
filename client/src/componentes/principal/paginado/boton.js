import { useDispatch, useSelector } from "react-redux";
import {
  obtenerParaOrdenar,
  obtenerPorNombre,
  obtenerPorPag,
} from "../../../redux/actions";

export const Boton = ({ setPagina, orden, pag, i }) => {
  let { busqueda } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        setPagina(i);
        if (busqueda) {
          return dispatch(
            obtenerPorNombre({
              orden: orden,
              nombre: busqueda,
              pagina: i,
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

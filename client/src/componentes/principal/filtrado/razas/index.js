import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { obtenerPorNombre } from "../../../../redux/actions";

export const RazasFiltrar = ({ todasRazas, setPagina }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function handlerSelect(e) {
    const { value } = e.target;
    setPagina(0);
    if (value === "todos") {
      history.go(0);
    } else {
      setPagina(0);
      dispatch(obtenerPorNombre({ nombre: value, pagina: 0 }));
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10rem",
        marginTop: "1rem",
      }}
    >
      <select onChange={handlerSelect}>
        <option disabled selected hidden>
          Razas
        </option>
        <option value="todos">Todos</option>
        {todasRazas.map((raza, i) => {
          return <option value={raza.name}>{raza.name}</option>;
        })}
      </select>
    </div>
  );
};

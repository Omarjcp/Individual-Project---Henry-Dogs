import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { obtenerPorTemperamento } from "../../../../redux/actions";

export const TempFiltrar = ({ setPagina, setTemperam }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { temperamentos } = useSelector((state) => state);

  function handlerSelect(e) {
    const { value } = e.target;
    setTemperam(e.target.value);
    setPagina(0);
    if (value === "todos") {
      history.go(0);
    } else {
      dispatch(obtenerPorTemperamento({ temperamento: value, pag: 0 }));
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10rem",
        height: "10vh",
      }}
    >
      <select onChange={handlerSelect}>
        <option disabled selected hidden>
          Temperamentos
        </option>
        <option value="todos">Todos</option>
        {temperamentos.map((temperamento) => {
          return <option value={temperamento.name}>{temperamento.name}</option>;
        })}
      </select>
    </div>
  );
};

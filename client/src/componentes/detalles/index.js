import { obtenerPorId } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Navbar } from "../navbar";
import { Loading } from "../loader/loading";

export const Detalle = () => {
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { razaId, idState } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(obtenerPorId(id));
  }, [id]);

  useEffect(() => {
    if (idState === Number(id)) setLoading(false);
  }, [idState]);

  function regresar() {
    history.replace("/principal");
  }

  return (
    <div>
      <Navbar path={regresar} />

      {loading ? (
        <Loading />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid black",
            width: "15rem",
            paddingBottom: "10px",
            marginTop: "5rem",
          }}
        >
          <div>
            <h3>{razaId.name}</h3>
          </div>
          <img
            src={`${razaId.image}`}
            style={{ height: "12rem", width: "15rem" }}
          />
          <div>
            {Array.isArray(razaId.temperamentos) ? (
              razaId.temperamentos.map((temp) => <span>{temp.name}, </span>)
            ) : (
              <span>{razaId.temperaments}</span>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "1rem" }}>
              <b>
                <label>altura min</label>
              </b>
            </div>

            <div>
              <b>
                <label>altura max</label>
              </b>
            </div>
          </div>
          <span>{razaId.height} cm</span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "1rem" }}>
              <b>
                <label>peso min</label>
              </b>
            </div>

            <div>
              <b>
                <label>peso max</label>
              </b>
            </div>
          </div>
          <span>{razaId.weight} kg</span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "1rem" }}>
              <b>
                <label>Años de vida</label>
              </b>
            </div>
          </div>
          <span>{razaId.life_span}</span>
        </div>
      )}
    </div>
  );
};

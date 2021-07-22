import { obtenerPorId } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Navbar } from "../navbar";
import { Loading } from "../loader/loading";
import { Contenedor, DivTarjeta } from "./styled";
import AvatarImagen from "./avatarPerro.png";

export const Detalle = () => {
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  let { razaId, idState, busqueda } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(obtenerPorId(id));
  }, [id]);

  useEffect(() => {
    if (idState == id) setLoading(false);
  }, [idState]);

  return (
    <Contenedor>
      <Navbar />

      {loading ? (
        <Loading />
      ) : (
        <DivTarjeta>
          <h3 style={{ margin: "10px" }}>{razaId.name}</h3>
          <div style={{ width: "13rem", height: "12rem" }}>
            <img
              src={`${razaId.image ? razaId.image : AvatarImagen}`}
              alt={`imagen de un ${razaId.name}`}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "80% 4% 80% 8% / 8% 86% 14% 92% ",
              }}
            />
          </div>

          <div style={{ marginLeft: ".5rem" }}>
            {Array.isArray(razaId.temperamentos) ? (
              razaId.temperamentos.map((temp) => <span>{temp.name}, </span>)
            ) : (
              <p>{razaId.temperaments}</p>
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
            <b>
              <label style={{ marginRight: "1rem" }}>Años de vida</label>
            </b>
          </div>
          <span>{razaId.life_span}</span>
        </DivTarjeta>
      )}
    </Contenedor>
  );
};

import { obtenerRazas } from "../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  DivContenedorRaza,
  Img,
  DivRazas,
  NombreRaza,
  Temperamentos,
  NombresTemperamentos,
  BotonDetalles,
} from "./styled";

export const Raza = () => {
  const dispatch = useDispatch();
  const { razas } = useSelector((state) => state);

  useEffect(() => {
    dispatch(obtenerRazas());
  }, []);

  return (
    <>
      <DivRazas>
        {razas.map((raza) => (
          <DivContenedorRaza>
            <NombreRaza>{raza.name}</NombreRaza>

            <Img src={raza.image} alt={`Imagen de Un ${raza.name}`} />

            <Temperamentos>
              <NombresTemperamentos>{raza.temperaments}</NombresTemperamentos>
            </Temperamentos>

            <Link to={`/raza/${raza.id}`} style={{ textDecoration: "none" }}>
              <BotonDetalles>Detalles</BotonDetalles>
            </Link>
          </DivContenedorRaza>
        ))}
      </DivRazas>
    </>
  );
};

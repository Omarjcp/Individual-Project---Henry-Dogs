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

export const Raza = ({ razas }) => {
  console.log(razas);
  return (
    <>
      <DivRazas>
        {razas?.map((raza) => (
          <DivContenedorRaza>
            <NombreRaza>{raza.name}</NombreRaza>

            <Img src={raza.image} alt={`Imagen de un ${raza.name}`} />

            <Temperamentos>
              <NombresTemperamentos>
                {Array.isArray(raza.temperamentos)
                  ? raza.temperamentos.map((temp) => (
                      <label>{temp.name}, </label>
                    ))
                  : raza.temperaments}
              </NombresTemperamentos>
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

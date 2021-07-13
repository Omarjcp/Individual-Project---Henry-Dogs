import { Link } from "react-router-dom";
import { BotonInicio, DivContenedor } from "./styled";

export const Inicio = () => {
  return (
    <>
      <DivContenedor>
        <Link to={`/principal`} style={{ textDecoration: "none" }}>
          <BotonInicio>Ver Perritos</BotonInicio>
        </Link>
      </DivContenedor>
    </>
  );
};

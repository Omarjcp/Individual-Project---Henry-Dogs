import { DivContainer, LinkNavbar } from "./styled";
import { Link } from "react-router-dom";

export const Barra = () => {
  return (
    <DivContainer>
      <div style={{ marginTop: "2rem" }}>
        <LinkNavbar to="/principal">Inicio</LinkNavbar>
      </div>
    </DivContainer>
  );
};

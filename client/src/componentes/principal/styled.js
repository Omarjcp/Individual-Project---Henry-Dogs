import styled from "styled-components";
import ImagenFondo from "./fondo.jpg";

export const DivContenedor = styled.div`
  background: url(${ImagenFondo}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
`;

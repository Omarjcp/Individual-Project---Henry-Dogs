import styled from "styled-components";
import ImagenFondo from "./imagenFondo.jpg";

export const Contenedor = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${ImagenFondo});
  background-size: cover;
`;

export const DivTarjeta = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15rem;
  padding-bottom: 10px;
  margin: 5rem 0 0 3rem;
  background-color: #72896f;
  height: 27rem;
  border: white 1px solid;
  border-radius: 94% 6% 94% 6% / 5% 95% 5% 95%;
  box-shadow: -3px -3px 10px lightseagreen;
`;

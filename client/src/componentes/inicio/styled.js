import styled from "styled-components";
import Imagen from "./wallpapersDog.jpg";

export const DivContenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Imagen});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

export const BotonInicio = styled.button`
  display: block;
  width: 13rem;
  height: 1.8rem;
  border: none;
  box-shadow: 2px 2px 15px 5px black;
  color: black;
  font-family: cursive;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.6em;
  letter-spacing: 1px;
  background-color: white;
  border-radius: 0.35em;
  cursor: pointer;
  opacity: 0.6;

  :hover {
    transform: scale(1.1);
    transition: all 0.2s ease 0.2s;
  }
  :active {
    background-color: #3e3e3e;
  }
`;

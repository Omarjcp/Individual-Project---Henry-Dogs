import styled from "styled-components";

export const DivRazas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const DivContenedorRaza = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 2px;
  border: 0.5px solid grey;
  box-shadow: 1px 3px 12px 1px gray;
  width: 15rem;
  margin: 0.6rem;
  background-color: #d1d1d1;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  :hover {
    transform: skew(2deg, 2deg);
    transition: all 0.3s ease;
  }
`;

export const Img = styled.img`
  width: 15rem;
  height: 13rem;
`;

export const NombreRaza = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0 0.5rem 0;
  font-family: cursive;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Temperamentos = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const NombresTemperamentos = styled.span`
  font-family: cursive;
  justify-content: center;
`;

export const BotonDetalles = styled.button`
  display: block;
  margin: 0.5rem 0 0.5rem 0;
  width: 10rem;
  height: 1.6rem;
  border: 0;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.6em;
  letter-spacing: 1px;
  background-color: #0a0a0b;
  border-radius: 0.35em;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
  :active {
    background-color: #3e3e3e;
  }
`;

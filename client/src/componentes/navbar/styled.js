import styled from "styled-components";
import { Link } from "react-router-dom";

export const Img = styled.img`
  height: 2rem;
  width: 2rem;
`;
export const Linknav = styled(Link)`
  text-decoration: none;
  color: #fafafa;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0 0.3rem 0 0.1rem;
  padding: 0.4rem;
  &:hover {
    color: #00cba9;
    font-size: 1.17rem;
  }
`;

export const NavB = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  border-bottom: 1.5px solid #666565;
  padding: 0.7rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const ContenedorBuscador = styled.div`
  margin-right: 4rem;
`;

export const InputBuscador = styled.input`
  background-color: #d5d5d5;
  border: 0.5px solid #00cba9;
  border-radius: 2px;
  height: 1.5rem;
  outline: none;
`;

export const BotonBuscador = styled.button`
  height: 1.5rem;
  border-radius: 2px;
  background: linear-gradient(145deg, #ffffff, #cfcfcf);
  box-shadow: 27px 27px 55px #787878, -27px -27px 55px #ffffff;
  border: 0.5px solid #00cba9;
  margin-left: 2px;
`;

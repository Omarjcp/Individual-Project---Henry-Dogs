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
    color: #9c0000;
    font-size: 1.17rem;
  }
`;

export const NavB = styled.nav`
  display: flex;
  align-items: center;
  background-color: grey;
  border-bottom: 1.5px solid #666565;
  padding: 0.7rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const ContenedorBuscador = styled.div``;

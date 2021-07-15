import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivContainer = styled.div`
  display: flex;
  height: 13rem;
  width: 100vw;
  background-color: blue;
  margin: 0;
  position: fixed;
  opacity: 0.8;
`;

export const LinkNavbar = styled(Link)`
  text-decoration: none;
  color: #fafafa;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 10rem 0 0 2rem;
  &:hover {
    color: #9c0000;
  }
`;

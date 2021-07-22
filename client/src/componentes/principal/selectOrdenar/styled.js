import styled from "styled-components";

export const SelectInput = styled.select`
  width: 12rem;
  height: 1.5rem;
  height: 1.5rem;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  outline: none;
  overflow: auto;
  border-radius: 3px;
  color: white;

  :hover {
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: black;
  }
`;

export const Opciones = styled.option`
  background-color: #2f2f2f;
  color: white;
`;

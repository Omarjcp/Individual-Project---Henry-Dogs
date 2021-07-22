import styled from "styled-components";

export const Select = styled.select`
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

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-track {
    background: #2f2f2f;
  }
`;

export const Opciones = styled.option`
  background-color: #2f2f2f;
  color: white;
`;

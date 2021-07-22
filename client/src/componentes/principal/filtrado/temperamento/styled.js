import styled from "styled-components";

export const Select = styled.select`
  height: 1.5rem;
  background-color: transparent;
  border-radius: 2px;
  border: none;
  box-shadow: 1px 1px 1px black;
  outline: none;
  overflow: auto;

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

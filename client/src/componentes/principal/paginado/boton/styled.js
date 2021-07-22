import styled from "styled-components";

export const BotonPag = styled.button`
  background-color: #595959;
  border: 1px solid grey;
  border-radius: 2px;
  margin-left: 1px;
  :hover {
    background-color: grey;
    transform: scale(1.2);
  }
  :active {
    background-color: transparent;
  }
  :focus {
    background: rgba(0, 0, 0, 0.65);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border-radius: 10px;
    transform: scale(1.1);
  }
`;

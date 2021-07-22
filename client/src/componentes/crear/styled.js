import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39rem;
  width: 33rem;
  position: relative;
  border: 1px solid grey;
  margin-top: 3rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: #f1f1f1;
  box-shadow: 2px 2px 5px #fafafa, -6px -6px 12px #767676;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
export const DivInputMinMax = styled.div`
  display: flex;
  flex-direction: row;
`;
export const InputN = styled.input`
  width: 20rem;
  height: 1.2rem;
  border: none;
  border-bottom: 0.5px solid grey;
  border-right: 0.5px solid grey;
  background-color: transparent;
`;

export const InputMin = styled.input`
  width: 5rem;
  margin-right: 4rem;
  height: 1.2rem;
  border: none;
  border-bottom: 0.5px solid grey;
  border-right: 0.5px solid grey;
  background-color: transparent;
`;

export const InputMax = styled.input`
  width: 5rem;
  height: 1.2rem;
  border: none;
  border-bottom: 0.5px solid grey;
  border-right: 0.5px solid grey;
  background-color: transparent;
`;
export const SpanError = styled.span`
  color: red;
  font-size: 0.7rem;
`;

export const InputSubmit = styled.input`
  height: 1.3rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  background: rgb(110, 156, 148);
  background: linear-gradient(
    90deg,
    rgba(110, 156, 148, 1) 0%,
    rgba(154, 204, 204, 1) 50%,
    rgba(110, 156, 148, 1) 100%
  );
  box-shadow: 2px 2px 2px grey;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(154, 204, 204, 1) 0%,
      rgba(110, 156, 148, 1) 50%,
      rgba(154, 204, 204, 1) 100%
    );
    cursor: grab;
  }
`;

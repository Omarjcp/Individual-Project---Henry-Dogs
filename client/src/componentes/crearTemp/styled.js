import styled from "styled-components";
import imgBanner from "./BannerDogs.jpg";

export const DivCont = styled.div`
  display: flex;
  height: 13rem;
  width: 100vw;
  background-image: url(${imgBanner});
  background-size: cover;
  margin: 0;
  position: fixed;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  min-height: 50vh;
  width: 33rem;
  padding: 5px;
  position: relative;
  border: 1px solid grey;
  margin-top: 7rem;
  margin-bottom: 8.5rem;
  border-radius: 10px;
  background: #f1f1f1;
  box-shadow: 2px 2px 5px #fafafa, -6px -6px 12px #767676;
`;

export const Li = styled.li`
  ::before {
    content: "-";
    padding-right: 2px;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem 2rem 1rem;
`;

export const InputN = styled.input`
  width: 15rem;
  height: 1.2rem;
  border: none;
  border-bottom: 0.5px solid grey;
  border-right: 0.5px solid grey;
  background-color: transparent;
  margin-top: 0.5rem;
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

export const SpanError = styled.span`
  color: red;
  font-size: 0.7rem;
`;

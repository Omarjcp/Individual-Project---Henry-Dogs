import styled from "styled-components";
import imgBanner from "./bannerDogs.jpg";

export const DivCont = styled.div`
  display: flex;
  height: 13rem;
  width: 100vw;
  background-image: url(${imgBanner});
  background-size: contain;
  margin: 0;
  position: fixed;
`;

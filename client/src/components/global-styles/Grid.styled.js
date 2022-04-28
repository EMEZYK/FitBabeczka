import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
  min-height: 60vh;
  width: 90%;
  justify-items: center;
  grid-auto-flow: dense;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2em;
  }
`;

export default GridContainer;

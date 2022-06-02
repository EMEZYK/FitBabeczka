import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 3em 1em;
  min-height: 60vh;
  width: 90%;
  justify-items: center;
  margin: 2rem 0 4rem 0;
  grid-auto-flow: dense;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2em;
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default GridContainer;

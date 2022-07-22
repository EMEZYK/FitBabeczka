import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 4em 2em;
  min-height: 60vh;
  width: 90%;
  justify-items: center;
  margin: 2rem 0 6rem 0;
  grid-auto-flow: dense;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4em 1em;
    margin: 0 0 4rem 0;
    padding: 1rem;
  }

  @media (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 6em;
  }
`;

export default GridContainer;

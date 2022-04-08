import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
  min-height: 60vh;
  width: 90%;
  justify-items: center;
  margin-top: 5vh;
`;

export default GridContainer;

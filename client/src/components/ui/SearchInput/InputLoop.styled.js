import styled from "styled-components";

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem;
  height: 4vh;
  min-width: 20vw;

  input {
    padding: 0.7rem;
    height: 2rem;
    width: 100%;
    border-radius: 0.2rem;
    border: 1px solid #754279;
    margin-left: 0.3rem;
    font-size: clamp(1rem, 2rem, 1.2rem);
  }

  img {
    max-width: 20px;
  }
`;

import styled from "styled-components";

export const ManageRecipeWrapper = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 0 1rem 0;
  background-color: ${({ theme }) => theme.colors.common.heading};
  background-color: #fff;
  border-top: 2px solid grey;

  button {
    width: 2rem;
    height: 2rem;
    border: 0;
    background-color: ${({ theme }) => theme.colors.common.heading};
    background-color: #fff;
    cursor: pointer;
    margin: 0 0.8rem;

    :hover {
      width: 2.2em;
    }
  }

  img {
    height: 100%;
  }
`;

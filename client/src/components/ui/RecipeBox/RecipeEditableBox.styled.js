import styled from "styled-components";

export const ManageRecipeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 6vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  margin: 0 0 1rem 0;
  background-color: ${({ theme }) => theme.colors.common.form};
  background-color: #fdfcfd;
  border-top: 2px solid grey;

  button {
    width: 2rem;
    height: 2rem;
    border: ${({ border }) => (border ? border : "0")};
    background-color: ${({ theme }) => theme.colors.common.heading};
    background-color: #fdfcfd;
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

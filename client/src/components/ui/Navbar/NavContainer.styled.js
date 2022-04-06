import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 0.4rem;

  a {
    color: #545454;
    text-decoration: none;
    margin-right: 1rem;
  }

  div.right-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;
    height: 100%;
    font-size: clamp(1rem, 2vw, 1.1rem);
    font-family: "Kaushan Script", cursiv;
  }

  div.login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3rem;
  }

  div.login a {
    margin-left: 0.5rem;
  }
  div.right-container img {
    max-width: 1rem;
  }

  div.left-container {
    width: 30%;
    display: flex;
    align-items: center;
  }
`;

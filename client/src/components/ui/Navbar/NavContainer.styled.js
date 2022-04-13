import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 0.4rem;
  list-style: none;

  a {
    color: #000;
    text-decoration: none;
    margin-right: 1rem;
  }

  .active {
    color: #dea8a8;
  }

  .left-container {
    width: 30%;
    display: flex;
    align-items: center;
  }

  .right-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;
    height: 100%;
    font-size: clamp(1rem, 2vw, 1.1rem);
    font-family: "Kaushan Script", cursiv;
  }
  li:last-child {
    margin-left: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li:last-child a {
    color: #545454;
  }
  div.login {
    align-items: center;
    justify-content: center;
    margin-left: 3rem;
  }

  .right-container img {
    max-width: 1rem;
    margin-right: 1rem;
  }
`;

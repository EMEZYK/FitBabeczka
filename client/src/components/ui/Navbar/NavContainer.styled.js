import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.navbar.primary};
  padding: 0.4rem;
  list-style: none;

  a {
    color: #000;
    text-decoration: none;
    margin-right: 1rem;
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
    font-size: clamp(1.6rem, 1.2vw, 3rem);
    font-family: "Kaushan Script", cursiv;
  }

  .right-container .active {
    color: #dea8a8;
  }

  .menu-page {
    padding: 1rem;
  }

  .menu-page:last-child {
    display: block;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-page:last-child img {
    max-width: 1.1rem;
    margin-right: 0.6rem;
  }
`;

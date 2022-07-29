import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  background-color: ${({ theme }) => theme.colors.navbar.primary};
  padding: 0.4rem;
  list-style: none;

  a {
    margin-right: 1rem;
    color: #000;
    text-decoration: none;
  }

  .left-container {
    display: flex;
    width: 30%;
    align-items: center;
  }

  .right-container {
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 2rem;

    @media (max-width: 876px) {
      margin: 0;
    }
  }

  .menu-page:last-child img {
    max-width: 1.1rem;
    margin-right: 0.6rem;
  }

  /* @media (max-width: 876px) {
    padding: 0.4rem 0 0 0;
  } */
`;

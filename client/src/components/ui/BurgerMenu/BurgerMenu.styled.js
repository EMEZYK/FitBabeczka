import styled from "styled-components";

export const StyledBurger = styled.div`
  cursor: pointer;
  z-index: 99;

  .fas {
    display: block;
    font-size: 2rem;
    margin: 0 2rem 0 0;
    color: #000;
  }
`;

export const AsideNavbar = styled.aside`
  position: absolute;
  min-width: 50%;
  top: 4.8rem;
  right: 0;
  background-color: ${({ theme }) => theme.colors.navbar.burgerMenu};
  transition: 0.3s linear;
  z-index: 1;
  padding: 0.7rem 0;
  box-shadow: 0px 2px 2px 1px rgb(0 0 0 / 25%);

  @media (max-width: 480px) {
    width: 70%;
  }
`;

export const BurgerNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  height: auto;

  .menu-page {
    border-bottom: 1px solid #ddd;
    padding: 1.7rem;

    :last-child {
      border-bottom: 0;
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.navbar.secondary};
    }
  }

  a {
    display: block;
    margin-right: 0;
    padding: 2rem;
    cursor: pointer;

    :last-child {
      padding: 0 0.4rem;
    }

    :hover {
      border-bottom: 1px solid;
    }
  }
`;
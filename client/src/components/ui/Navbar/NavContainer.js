import React from "react";
import LogoIcon from "../Logo/Logo";
import { NavContainer } from "./NavContainer.styled";
import BlogNameComponent from "../BlogName/PageName";
import { NavLink } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";

const NavigateContainer = ({ page, setBackground }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  const showBurger = () => {
    if (isMobile === true) {
      return (
        <>
          <BurgerMenu page={page} setBackground={setBackground}></BurgerMenu>
        </>
      );
    } else {
      return (
        <>
          <div className="right-container">{page}</div>
        </>
      );
    }
  };

  return (
    <>
      <NavContainer>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <div className="left-container">
            <LogoIcon />
            <BlogNameComponent />
          </div>
        </NavLink>
        {showBurger()}
      </NavContainer>
    </>
  );
};

export default NavigateContainer;

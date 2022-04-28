import React from "react";
import LogoIcon from "../Logo/Logo";
import { NavContainer } from "./NavContainer.styled";
import BlogNameComponent from "../BlogName/PageName";
import { NavLink } from "react-router-dom";

const NavigateContainer = ({ page }) => {
  return (
    <>
      <NavContainer>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <div className="left-container">
            <LogoIcon />
            <BlogNameComponent />
          </div>
        </NavLink>

        <div className="right-container">{page}</div>
      </NavContainer>
    </>
  );
};

export default NavigateContainer;

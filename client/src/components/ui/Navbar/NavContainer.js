import React from "react";
import LogoIcon from "../Logo/Logo";
import { NavContainer } from "./NavContainer.styled";
import BlogNameComponent from "../BlogName/PageName";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <div className="left-container">
          <LogoIcon />
          <BlogNameComponent />
        </div>
        <div className="right-container">
          <a href="/">Przepisy</a>
          <a href="/">O mnie</a>
          <div className="login">
            <img src="icons/login.svg" alt="" />
            <a href="/">Login</a>
          </div>
        </div>
      </NavContainer>
    </>
  );
};

export default Navbar;

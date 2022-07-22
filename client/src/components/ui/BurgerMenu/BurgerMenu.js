import React from "react";
import { useState } from "react";
import { StyledBurger, AsideNavbar, BurgerNavbar } from "./BurgerMenu.styled";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeStore";
import { themeDark } from "../../global-styles/Flex.styled";

export const BurgerMenu = ({ page, setBackground }) => {
  const [open, setOpen] = useState(false);
  const { switchTheme } = useContext(ThemeContext);

  const handleBurgerMenu = () => {
    setOpen(!open);
    console.log("th", themeDark);
    switchTheme("dark");
  };

  const showIcon = () => {
    if (open === true) {
      return <i className="fas fa-times"></i>;
    } else {
      return <i className="fas fa-bars show"></i>;
    }
  };

  return (
    <>
      <StyledBurger open={open} onClick={handleBurgerMenu}>
        {showIcon()}
      </StyledBurger>
      {open && (
        <AsideNavbar open={open} onClick={handleBurgerMenu}>
          <BurgerNavbar>{page}</BurgerNavbar>
        </AsideNavbar>
      )}
    </>
  );
};

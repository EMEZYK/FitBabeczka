import React from "react";
import { useState, useContext } from "react";
import { StyledBurger, AsideNavbar, BurgerNavbar } from "./BurgerMenu.styled";
import { ThemeContext } from "../../../context/ThemeStore";

export const BurgerMenu = ({ page, setBackground }) => {
  const [open, setOpen] = useState(false);
  const { switchTheme } = useContext(ThemeContext);

  const handleBurgerMenu = () => {
    setOpen(!open);
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

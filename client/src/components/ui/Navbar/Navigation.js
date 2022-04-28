import { NavLink } from "react-router-dom";
// import { NavigationStyle } from "./Navigation.styled";

const Navbar = ({ source, name, icon }) => {
  return (
    <>
      <li className="menu-page">
        <NavLink to={source} activeClassname="active">
          <img src={icon} alt="" />
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;

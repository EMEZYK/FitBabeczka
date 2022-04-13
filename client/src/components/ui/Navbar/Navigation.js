import { NavLink } from "react-router-dom";
// import { NavigationStyle } from "./Navigation.styled";

const Navbar = ({ source, name, icon }) => {
  return (
    <>
      {/* <NavigationStyle> */}
      <li>
        <NavLink to={source} activeClassname="active">
          <img src={icon} alt="" />
          {name}
        </NavLink>
      </li>
      {/* </NavigationStyle> */}
    </>
  );
};

export default Navbar;
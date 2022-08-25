import { NavLink } from "react-router-dom";

const Navbar = ({ source, name, icon }) => {
  return (
    <>
      <li className="menu-page">
        <NavLink to={source} activeclassname="active">
          <img src={icon} alt="" />
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;

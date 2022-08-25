import { LogoIcon } from "./Logo.styled";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <LogoIcon src="/icons/logo.png" />
    </NavLink>
  );
};

export default Logo;

import { Logo } from "./Logo.styled";
import { NavLink } from "react-router-dom";

const LogoIcon = () => {
  return (
    <NavLink to={"/"}>
      <Logo src="/icons/logo.png" />
    </NavLink>
  );
};

export default LogoIcon;

import { CategoryCircle, CategoryImage } from "./CategoryCircle.styled";
import { NavLink } from "react-router-dom";

const CategoryCircleComponent = (props) => {
  return (
    <CategoryCircle>
      <NavLink
        to={props.source}
        activeclassname="active"
        style={{ textDecoration: "none" }}
      >
        <CategoryImage src={props.image} alt=""></CategoryImage>
        <p className="category-name">{props.name}</p>
      </NavLink>
    </CategoryCircle>
  );
};

export default CategoryCircleComponent;

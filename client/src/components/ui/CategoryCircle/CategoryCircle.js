import { CategoryCircleWrapper, CategoryImage } from "./CategoryCircle.styled";
import { NavLink } from "react-router-dom";

const CategoryCircle = (props) => {
  return (
    <CategoryCircleWrapper>
      {props.isAdminPanel ? (
        <NavLink
          to={`/user${props.source}`}
          activeclassname="active"
          style={{ textDecoration: "none" }}
        >
          <CategoryImage src={props.image} alt=""></CategoryImage>
          <p className="category-name">{props.name}</p>
        </NavLink>
      ) : (
        <NavLink
          to={props.source}
          activeclassname="active"
          style={{ textDecoration: "none" }}
        >
          <CategoryImage src={props.image} alt=""></CategoryImage>
          <p className="category-name">{props.name}</p>
        </NavLink>
      )}
    </CategoryCircleWrapper>
  );
};

export default CategoryCircle;

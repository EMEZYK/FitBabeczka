import {
  RecipeBox,
  Image,
  RecipeName,
  RecipeNameWrapper,
  ReadMoreButton,
} from "./RecipeBox.styled";
import { NavLink } from "react-router-dom";

const RecipeBoxComponent = (props) => {
  return (
    <RecipeBox>
      <NavLink
        to={`/${props.recipe._id}`}
        style={{ textDecoration: "none", color: "#000" }}
        key={props.recipe._id}
      >
        <Image src={props.recipe.image} alt=""></Image>

        <RecipeNameWrapper>
          <RecipeName>{props.recipe.name}</RecipeName>
          <ReadMoreButton>czytaj</ReadMoreButton>
        </RecipeNameWrapper>
      </NavLink>
    </RecipeBox>
  );
};

export default RecipeBoxComponent;

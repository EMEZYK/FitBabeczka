import {
  RecipeBox,
  Image,
  RecipeName,
  RecipeNameWrapper,
  ReadMoreButton,
} from "./RecipeBox.styled";
import { NavLink } from "react-router-dom";

const RecipeBoxComponent = (props) => {
  const recipe = props.recipe;
  return (
    <>
      <RecipeBox data-testid="recipe">
        <NavLink
          to={`/${recipe._id}`}
          style={{ textDecoration: "none", color: "#000" }}
          key={recipe._id}
        >
          <Image
            src={
              "data:" +
              recipe.image.contentType +
              ";base64, " +
              recipe.image.data
            }
            alt="recipe photo"
          ></Image>

          <RecipeNameWrapper>
            <RecipeName>{recipe.name}</RecipeName>
            <ReadMoreButton>czytaj</ReadMoreButton>
          </RecipeNameWrapper>
        </NavLink>
      </RecipeBox>
    </>
  );
};

export default RecipeBoxComponent;

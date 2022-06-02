import {
  RecipeBox,
  Image,
  RecipeName,
  RecipeNameWrapper,
  ReadMoreButton,
} from "./RecipeBox.styled";

const RecipeBoxComponent = (props) => {
  return (
    <>
      <RecipeBox>
        <Image src={props.recipe.image[0].url} alt=""></Image>
        <RecipeNameWrapper>
          <RecipeName>{props.recipe.name}</RecipeName>
          <ReadMoreButton>czytaj</ReadMoreButton>
        </RecipeNameWrapper>
      </RecipeBox>
    </>
  );
};

export default RecipeBoxComponent;

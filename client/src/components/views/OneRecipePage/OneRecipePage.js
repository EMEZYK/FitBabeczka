import { theme } from "../../../theme/theme";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import { RecipeBox } from "../../ui/RecipeBox/RecipeBox.styled";
import { Image } from "../../ui/RecipeBox/RecipeBox.styled";
import {
  RecipePreparation,
  RecipeHeader,
  RecipeContainer,
  Ingredient,
  IngredientList,
  IngredientsContainer,
  DescriptionContainer,
  RecipeShortDescription,
  RecipeDescriptionContainer,
  TitleRecipe,
  ImageContainer,
} from "./OneRecipePage.styled";
import { RecipeInfoCard } from "../../ui/Card/InfoCard";
import { useContext } from "react";
import { GetRecipes } from "../../../context/recipes-context";
import { useParams } from "react-router-dom";

export const RecipePage = () => {
  const recipes = useContext(GetRecipes);

  const { id } = useParams();

  if (recipes.length === 0) {
    return <div>Loading...</div>;
  }
  const recipe = recipes.data.find((recipe) => recipe._id === id);

  let recipeLevel = recipe.difficultyLevel;

  switch (recipeLevel) {
    case "łatwy":
      recipeLevel = "/icons/level.png";
      break;
    case "średni":
      recipeLevel = "/icons/medium-level.png";
      break;
    case "trudny":
      recipeLevel = "/icons/high-level.png";
      break;
    default:
      recipeLevel = "/icons/medium-level.png";
  }

  return (
    <RecipeContainer>
      <FlexWrapper height={"80vh"} width={"90%"}>
        <ImageContainer>
          <Image src={recipe.image[0].url} />
          <RecipeInfoCard image={"/icons/time.png"} details={recipe.time} />
          <RecipeInfoCard
            image={recipeLevel}
            details={recipe.difficultyLevel}
          />
          <RecipeInfoCard
            image={"/icons/plates.png"}
            details={recipe.servingsNumber}
          />
        </ImageContainer>
        <RecipeBox
          height={"90%"}
          width={"60%"}
          padding={"2rem"}
          color={theme.colors.card.secondary}
          boxShadow={theme.colors.card.boxShadow}
        >
          <TitleRecipe>{recipe.name}</TitleRecipe>
          <RecipeShortDescription>{recipe.description}</RecipeShortDescription>
          <RecipeDescriptionContainer>
            <IngredientsContainer>
              <RecipeHeader>Składniki</RecipeHeader>
              <IngredientList>
                {recipe.ingredients.map((ingredient) => (
                  <Ingredient key={ingredient._id}>{ingredient}</Ingredient>
                ))}
              </IngredientList>
            </IngredientsContainer>
            <DescriptionContainer>
              <RecipeHeader>Przygotowanie</RecipeHeader>
              <RecipePreparation>{recipe.preparation}</RecipePreparation>
            </DescriptionContainer>
          </RecipeDescriptionContainer>
        </RecipeBox>
      </FlexWrapper>
    </RecipeContainer>
  );
};

export default RecipePage;

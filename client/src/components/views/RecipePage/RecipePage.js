import { theme } from "../../../theme/theme";
import { Wrapper } from "../../global-styles/Flex.styled";
import { RecipeBox } from "../../ui/RecipeBox/RecipeBox.styled";
import { RecipeImage } from "../../ui/RecipeBox/RecipeBox.styled";
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
} from "./RecipePage.styled";
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
  const recipe = recipes.find((recipe) => recipe._id === id);

  return (
    <RecipeContainer>
      <Wrapper height={"80vh"} width={"90%"}>
        <ImageContainer>
          <RecipeImage src={recipe.image[0].url} />
          <RecipeInfoCard image={"/icons/time.png"} details={recipe.time} />
          <RecipeInfoCard
            image={"/icons/level.png"}
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
          padding={"1rem"}
          color={theme.colors.card.secondary}
          boxShadow={theme.colors.card.boxShadow}
        >
          <TitleRecipe>{recipe.name}</TitleRecipe>
          <RecipeShortDescription>{recipe.description}</RecipeShortDescription>
          <RecipeDescriptionContainer>
            <IngredientsContainer>
              <RecipeHeader>Składniki</RecipeHeader>
              <IngredientList>
                <Ingredient> {recipe.ingredients}</Ingredient>
              </IngredientList>
            </IngredientsContainer>
            <DescriptionContainer>
              <RecipeHeader>Przygotowanie</RecipeHeader>
              <RecipePreparation>{recipe.preparation}</RecipePreparation>
            </DescriptionContainer>
          </RecipeDescriptionContainer>
        </RecipeBox>
      </Wrapper>
    </RecipeContainer>
  );
};

export default RecipePage;

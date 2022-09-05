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
  RecipeInfoContainer,
} from "./OneRecipePage.styled";
import { RecipeInfoCard } from "../../ui/Card/RecipeInfoCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const RecipePage = () => {
  const [recipe, setRecipe] = useState([]);

  const { id } = useParams();

  const fetchGetOneRecipe = async () => {
    await axios({
      url: `/recipes/${id}`,
    })
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchGetOneRecipe();
  }, [id]);

  if (recipe.length === 0) {
    return <div>Loading...</div>;
  }

  let recipeLevel = recipe.difficultyLevel;

  switch (recipeLevel) {
    case "Łatwy":
      recipeLevel = "/icons/level.png";
      break;
    case "Średni":
      recipeLevel = "/icons/medium-level.png";
      break;
    case "Trudny":
      recipeLevel = "/icons/high-level.png";
      break;
    default:
      recipeLevel = "/icons/medium-level.png";
  }
  console.log("elo", recipe?.image, typeof recipe?.image.data);
  console.log(
    "elo2",
    "data:" + recipe.image.contentType + ";base64, " + recipe.image.data
  );

  // src="data:image/<%=image.img.contentType%>;base64,
  // <%=image.img.data.toString('base64')%>"

  return (
    <RecipeContainer>
      <FlexWrapper minHeight="auto" width="100%" mobileHeight="auto">
        <ImageContainer>
          <Image
            src={
              "data:" +
              recipe.image.contentType +
              ";base64, " +
              recipe.image.data
            }
            alt="recipe photo"
          />
          <RecipeInfoContainer>
            <RecipeInfoCard
              image={"/icons/time.png"}
              details={recipe.time}
              alt="preparation-time"
              data-testid="preparation-time"
            />
            <RecipeInfoCard
              image={recipeLevel}
              details={recipe.difficultyLevel}
              alt="difficulty-level"
            />
            <RecipeInfoCard
              image={"/icons/plates.png"}
              details={recipe.servingsNumber}
              alt="servings-number"
            />
          </RecipeInfoContainer>
        </ImageContainer>
        <RecipeBox
          // height={"90%"}
          width={"55%"}
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

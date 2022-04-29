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

const RecipePage = () => {
  return (
    <RecipeContainer>
      <Wrapper height={"80vh"} width={"90%"}>
        <ImageContainer>
          <RecipeImage />
          <RecipeInfoCard image={"/icons/time.png"} />
          <RecipeInfoCard image={"/icons/level.png"} />
          <RecipeInfoCard image={"/icons/plates.png"} />
        </ImageContainer>
        <RecipeBox
          height={"90%"}
          width={"60%"}
          padding={"1rem"}
          color={theme.colors.card.secondary}
          boxShadow={theme.colors.card.boxShadow}
        >
          <TitleRecipe>CIASTO KRÓWKOWE</TitleRecipe>
          <RecipeShortDescription>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
            nieznanego drukarza do wypełnienia tekstem próbnej książki.
          </RecipeShortDescription>
          <RecipeDescriptionContainer>
            <IngredientsContainer>
              <RecipeHeader>Składniki</RecipeHeader>
              <IngredientList>
                <Ingredient> mleko</Ingredient>
                <Ingredient> cos</Ingredient>
              </IngredientList>
            </IngredientsContainer>
            <DescriptionContainer>
              <RecipeHeader>Przygotowanie</RecipeHeader>
              <RecipePreparation>
                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
                w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                przez nieznanego drukarza do wypełnienia tekstem próbnej
                książki.Lorem Ipsum jest tekstem stosowanym jako przykładowy
                wypełniacz w przemyśle poligraficznym. Został po raz pierwszy
                użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
                próbnej książki.
              </RecipePreparation>
            </DescriptionContainer>
          </RecipeDescriptionContainer>
        </RecipeBox>
      </Wrapper>
    </RecipeContainer>
  );
};

export default RecipePage;

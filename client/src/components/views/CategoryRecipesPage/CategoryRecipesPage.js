import React from "react";
import { useContext } from "react";
import { RecipesContext } from "../../../context/recipes-context";
import AllDishes from "../../ui/AllDishes/AllDishes";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import FooterComponent from "../../ui/Footer/Footer";
import { PageSubtitle } from "../../ui/PageSubtitle/PageSubtitle.styled";

const CategoryRecipesPage = ({ categoryId, pageTitle, toEdit }) => {
  const recipesContext = useContext(RecipesContext);
  const recipes = recipesContext.recipes;

  const recipesByCategory =
    recipes.length !== 0
      ? recipes.filteredData.filter((recipe) => recipe.category === categoryId)
      : [];

  const renderRecipes = () => {
    if (recipesByCategory) {
      return (
        <>
          {toEdit ? (
            <AllDishes recipes={recipesByCategory} isEditable={true} />
          ) : (
            <AllDishes recipes={recipesByCategory} isEditable={false} />
          )}
        </>
      );
    } else {
      return <div>cannot load recipes</div>;
    }
  };

  return (
    <>
      <FlexWrapper>
        <PageSubtitle>{pageTitle}</PageSubtitle>
        {renderRecipes()}
        <FooterComponent />
      </FlexWrapper>
    </>
  );
};

export default CategoryRecipesPage;

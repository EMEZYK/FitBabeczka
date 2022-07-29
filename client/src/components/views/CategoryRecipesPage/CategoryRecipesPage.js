import React from "react";
import { useContext } from "react";
import { RecipesContext } from "../../../context/recipes-context";
import AllDishesComponent from "../../ui/AllDishes/AllDishes";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import FooterComponent from "../../ui/Footer/Footer";
import { PageTitle } from "../../ui/PageTitle/PageTitle.styled";

const CategoryRecipesPage = ({ categoryId, pageTitle, toEdit }) => {
  const recipesContext = useContext(RecipesContext);
  const recipes = recipesContext.recipes;

  console.log(recipes);
  const recipesByCategory =
    recipes.length !== 0
      ? recipes.filteredData.filter((recipe) => recipe.category === categoryId)
      : [];

  const renderRecipes = () => {
    if (recipesByCategory) {
      return (
        <>
          {toEdit ? (
            <AllDishesComponent recipes={recipesByCategory} isEditable={true} />
          ) : (
            <AllDishesComponent
              recipes={recipesByCategory}
              isEditable={false}
            />
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
        <PageTitle>{pageTitle}</PageTitle>
        {renderRecipes()}
        <FooterComponent />
      </FlexWrapper>
    </>
  );
};

export default CategoryRecipesPage;

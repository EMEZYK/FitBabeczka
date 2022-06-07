import React from "react";
import { useContext } from "react";
import { GetRecipes } from "../../../context/recipes-context";
import AllDishesComponent from "../../ui/AllDishes/AllDishes";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import FooterComponent from "../../ui/Footer/Footer";
import { PageTitle } from "../../ui/PageTitle/PageTitle.styled";

const CategoryRecipesPage = ({ categoryId, pageTitle }) => {
  const recipes = useContext(GetRecipes);
  const recipesByCategory = recipes.filteredData.filter(
    (recipe) => recipe.category === categoryId
  );
  const renderRecipes = () => {
    if (recipesByCategory) {
      return <AllDishesComponent recipes={recipesByCategory} />;
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

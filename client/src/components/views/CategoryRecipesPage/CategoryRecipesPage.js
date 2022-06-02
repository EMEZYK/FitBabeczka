import React from "react";
import { useContext } from "react";
import { GetRecipes } from "../../../context/recipes-context";
import AllDishesComponent from "../../ui/AllDishes/AllDishes";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import FooterComponent from "../../ui/Footer/Footer";
import { PageTitle } from "../../ui/PageTitle/PageTitle.styled";

const CategoryRecipesPage = ({ categoryId, pageTitle }) => {
  const recipes = useContext(GetRecipes);
  console.log("tuty", recipes.data);
  const recipesByCategory = recipes.data.filter(
    (recipe) => recipe.category === categoryId
  );

  console.log(recipesByCategory);

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

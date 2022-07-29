import React from "react";
import { useContext } from "react";
import { GetRecipes } from "../../../context/recipes-context";
import AllDishesComponent from "../../ui/AllDishes/AllDishes";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import FooterComponent from "../../ui/Footer/Footer";
import { PageTitle } from "../../ui/PageTitle/PageTitle.styled";

const CategoryRecipesPage = ({ categoryId, pageTitle, toEdit }) => {
  const recipes = useContext(GetRecipes);
  console.log(recipes);
  const recipesByCategory = recipes.filteredData.filter(
    (recipe) => recipe.category === categoryId
  );

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

  // useEffect(() => {
  //   renderRecipes();
  // }, [id]);

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

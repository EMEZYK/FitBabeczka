import GridContainer from "../../global-styles/Grid.styled";
import RecipeBoxComponent from "../RecipeBox/RecipeBox";
import RecipeEditableBox from "../RecipeBox/RecipeEditableBox";

const AllDishes = ({
  recipes,
  loading,
  isEditable,
  setDeletedRecipeId,
  setAddedRecipeId,
  categories,
  setEditedRecipeId,
}) => {
  recipes = recipes ? recipes : [];

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <GridContainer data-testid="recipes-container">
      {recipes.map((recipe) => (
        <>
          {isEditable ? (
            <RecipeEditableBox
              key={recipe._id}
              recipe={recipe}
              categories={categories}
              setDeletedRecipeId={setDeletedRecipeId}
              setEditedRecipeId={setEditedRecipeId}
            ></RecipeEditableBox>
          ) : (
            <RecipeBoxComponent
              recipe={recipe}
              key={recipe._id}
              setAddedRecipeId={setAddedRecipeId}
              data-testid="recipe-box"
            ></RecipeBoxComponent>
          )}
        </>
      ))}
    </GridContainer>
  );
};

export default AllDishes;

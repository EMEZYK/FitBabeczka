import GridContainer from "../../global-styles/Grid.styled";
import RecipeBoxComponent from "../RecipeBox/RecipeBox";
import EditRecipe from "../RecipeBox/RecipeEditableBox";

const AllDishesComponent = ({
  recipes,
  loading,
  isEditable,
  setDeletedRecipeId,
  setAddedRecipeId,
  categories,
}) => {
  recipes = recipes ? recipes : [];

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <GridContainer>
        {recipes.map((recipe) => (
          <>
            {isEditable ? (
              <EditRecipe
                key={recipe._id}
                recipe={recipe}
                setDeletedRecipeId={setDeletedRecipeId}
                setAddedRecipeId={setAddedRecipeId}
                categories={categories}
              ></EditRecipe>
            ) : (
              <RecipeBoxComponent
                recipe={recipe}
                key={recipe._id}
                setAddedRecipeId={setAddedRecipeId}
              ></RecipeBoxComponent>
            )}
          </>
        ))}
      </GridContainer>
    </>
  );
};

export default AllDishesComponent;

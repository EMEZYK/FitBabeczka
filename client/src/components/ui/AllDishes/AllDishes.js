import GridContainer from "../../global-styles/Grid.styled";
import RecipeBoxComponent from "../RecipeBox/RecipeBox";
import RecipeEditableBox from "../RecipeBox/RecipeEditableBox";

const AllDishesComponent = ({
  recipes,
  loading,
  isEditable,
  setDeletedRecipeId,
  setAddedRecipeId,
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
              <RecipeEditableBox
                key={recipe._id}
                recipe={recipe}
                setDeletedRecipeId={setDeletedRecipeId}
              ></RecipeEditableBox>
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

import GridContainer from "../../global-styles/Grid.styled";
import RecipeBoxComponent from "../RecipeBox/RecipeBox";
import RecipeEditableBox from "../RecipeBox/RecipeEditableBox";

const AllDishesComponent = ({
  recipes,
  loading,
  isEditable,
  setDeletedRecipeId,
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
                recipe={recipe}
                setDeletedRecipeId={setDeletedRecipeId}
              ></RecipeEditableBox>
            ) : (
              <RecipeBoxComponent recipe={recipe}></RecipeBoxComponent>
            )}
          </>
        ))}
      </GridContainer>
    </>
  );
};

export default AllDishesComponent;

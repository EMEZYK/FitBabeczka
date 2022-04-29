import GridContainer from "../../global-styles/Grid.styled";
import RecipeBoxComponent from "../RecipeBox/RecipeBox";

const AllDishesComponent = ({ recipes }) => {
  recipes = recipes ? recipes : [];
  return (
    <GridContainer>
      {recipes.map((recipe) => (
        <RecipeBoxComponent
          recipe={recipe}
          // image={recipe.image[0].url}
          // name={recipe.name}
          // key={recipe._id}
        ></RecipeBoxComponent>
      ))}
    </GridContainer>
  );
};

export default AllDishesComponent;

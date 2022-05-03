import GridContainer from "../../global-styles/Grid.styled";
import RecipeBoxComponent from "../RecipeBox/RecipeBox";
import { NavLink } from "react-router-dom";

const AllDishesComponent = ({ recipes }) => {
  recipes = recipes ? recipes : [];
  return (
    <GridContainer>
      {recipes.map((recipe) => (
        <NavLink
          to={`przepisy/${recipe._id}`}
          style={{ textDecoration: "none" }}
        >
          <RecipeBoxComponent
            recipe={recipe}
            // image={recipe.image[0].url}
            // name={recipe.name}
            // key={recipe._id}
          ></RecipeBoxComponent>
        </NavLink>
      ))}
    </GridContainer>
  );
};

export default AllDishesComponent;

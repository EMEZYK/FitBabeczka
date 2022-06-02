import GridContainer from "../../global-styles/Grid.styled";
import RecipeBoxComponent from "../RecipeBox/RecipeBox";
import { NavLink } from "react-router-dom";

const AllDishesComponent = ({ recipes, loading }) => {
  recipes = recipes ? recipes : [];
  // recipes = recipes ? recipes : [];

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <GridContainer>
      {recipes.map((recipe) => (
        <NavLink
          to={`/${recipe._id}`}
          style={{ textDecoration: "none", color: "#000" }}
          key={recipe._id}
        >
          <RecipeBoxComponent recipe={recipe}></RecipeBoxComponent>
        </NavLink>
      ))}
    </GridContainer>
  );
};

export default AllDishesComponent;

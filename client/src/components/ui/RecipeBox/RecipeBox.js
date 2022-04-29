import { RecipeBox } from "./RecipeBox.styled";
import { RecipeImage } from "./RecipeBox.styled";

const RecipeBoxComponent = (props) => {
  console.log(props.recipe);
  return (
    <>
      <RecipeBox>
        <RecipeImage src={props.recipe.image[0].url} alt=""></RecipeImage>
        <div className="recipeName">
          <h2>{props.recipe.name}</h2>
          <button>czytaj</button>
        </div>
      </RecipeBox>
    </>
  );
};

export default RecipeBoxComponent;

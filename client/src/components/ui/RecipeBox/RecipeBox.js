import { RecipeBox } from "./RecipeBox.styled";
import { RecipeImage } from "./RecipeBox.styled";

const RecipeBoxComponent = (props) => {
  return (
    <>
      <RecipeBox>
        <RecipeImage src={props.image} alt=""></RecipeImage>
        <div className="recipeName">
          <h2>{props.name}</h2>
          <button>czytaj</button>
        </div>
      </RecipeBox>
    </>
  );
};

export default RecipeBoxComponent;

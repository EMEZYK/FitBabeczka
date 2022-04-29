import { RecipeInfo } from "./InfoCard.styled";

export const RecipeInfoCard = ({ image, alt }) => {
  return (
    <RecipeInfo>
      <img src={image} alt={alt}></img>
      <p>łatwy</p>
    </RecipeInfo>
  );
};

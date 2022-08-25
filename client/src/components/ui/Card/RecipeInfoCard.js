import { RecipeInfo } from "./RecipeInfoCard.styled";

export const RecipeInfoCard = ({ image, alt, details }) => {
  return (
    <RecipeInfo>
      <img src={image} alt={alt} data-testid="info-card"></img>
      <p>{details}</p>
    </RecipeInfo>
  );
};

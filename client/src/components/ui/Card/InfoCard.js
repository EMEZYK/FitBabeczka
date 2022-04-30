import { RecipeInfo } from "./InfoCard.styled";

export const RecipeInfoCard = ({ image, alt, details }) => {
  return (
    <RecipeInfo>
      <img src={image} alt={alt}></img>
      <p>{details}</p>
    </RecipeInfo>
  );
};

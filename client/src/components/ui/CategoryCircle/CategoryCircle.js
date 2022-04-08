import { CategoryCircle, CategoryImage } from "./CategoryCircle.styled";
const CategoryCircleComponent = (props) => {
  return (
    <CategoryCircle>
      <CategoryImage src={props.image} alt=""></CategoryImage>
      <p>{props.name}</p>
    </CategoryCircle>
  );
};

export default CategoryCircleComponent;

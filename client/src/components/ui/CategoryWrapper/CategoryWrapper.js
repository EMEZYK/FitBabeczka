import CategoryCircleComponent from "../CategoryCircle/CategoryCircle";
import { CategoriesWrapper } from "./CategoryWrapper.styled";

const CategoriesWrapperComponent = ({ categories, categoriesLoadingError }) => {
  return (
    <>
      {
        <div>
          {categoriesLoadingError && categoriesLoadingError.message}
          {categories && categories.length > 0 && (
            <CategoriesWrapper>
              {categories.map((category) => (
                <CategoryCircleComponent
                  source={category.path}
                  image={category.image}
                  key={category._id}
                  categoryId={category._id}
                  name={category.name}
                ></CategoryCircleComponent>
              ))}
            </CategoriesWrapper>
          )}
        </div>
      }
    </>
  );
};

export default CategoriesWrapperComponent;

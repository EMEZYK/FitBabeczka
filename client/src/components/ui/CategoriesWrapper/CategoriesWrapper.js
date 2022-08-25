import CategoryCircle from "../CategoryCircle/CategoryCircle";
import { Categories } from "./CategoriesWrapper.styled";

const CategoriesWrapper = ({
  categories,
  categoriesLoadingError,
  isAdminPanel,
}) => {
  return (
    <>
      {
        <>
          {categoriesLoadingError && categoriesLoadingError.message}
          {categories && categories.length > 0 && (
            <Categories>
              {categories.map((category) => (
                <CategoryCircle
                  source={category.path}
                  image={category.image}
                  key={category._id}
                  categoryId={category._id}
                  name={category.name}
                  isAdminPanel={isAdminPanel}
                ></CategoryCircle>
              ))}
            </Categories>
          )}
        </>
      }
    </>
  );
};

export default CategoriesWrapper;

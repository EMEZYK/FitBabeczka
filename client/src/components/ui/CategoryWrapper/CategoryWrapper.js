import CategoryCircleComponent from "../CategoryCircle/CategoryCircle";
import { CategoriesWrapper } from "./CategoryWrapper.styled";
import useFetchData from "../../../hooks/fetch-data";

const CategoriesWrapperComponent = () => {
  const { response, error } = useFetchData({
    url: "/categories",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });

  const categories = response;

  return (
    <>
      {
        <div>
          {error && error.message}
          {categories && categories.length > 0 && (
            <CategoriesWrapper>
              {categories.map((category) => (
                <CategoryCircleComponent
                  image={category.image}
                  key={category._id}
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

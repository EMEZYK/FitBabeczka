import CategoryCircleComponent from "../CategoryCircle/CategoryCircle";
import { CategoriesWrapper } from "./CategoryWrapper.styled";
import useFetchData from "../../../hooks/fetch-data";

const CategoriesWrapperComponent = () => {
  const { response, error, loading } = useFetchData({
    url: "/categories",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });
  //   console.log(response);
  const categories = response.result;
  console.log(categories);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error && error.message}
          {categories && categories.length > 0 && (
            <CategoriesWrapper>
              {categories.map((category) => (
                <CategoryCircleComponent
                  image={category.image}
                  key={category.id}
                  name={category.name}
                ></CategoryCircleComponent>
              ))}
            </CategoriesWrapper>
          )}
        </div>
      )}
    </>
  );
};

export default CategoriesWrapperComponent;

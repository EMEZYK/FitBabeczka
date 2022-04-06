import useFetchData from "../../../hooks/fetch-data";
import SavedButton from "../../ui/SaveButton/SaveButton";
import Navbar from "../../ui/Navbar/NavContainer";
import InputSearchComponent from "../../ui/Input/InputLoop";
import { Wrapper } from "../../global-styles/Flex.styled";
import FooterComponent from "../../ui/Footer/Footer";
import HeaderComponent from "../../ui/Header/Header";
import CategoriesWrapperComponent from "../../ui/CategoryWrapper/CategoryWrapper";

const LandingPage = () => {
  const { response, error, loading } = useFetchData({
    url: "/recipes",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });
  //   console.log(response);
  const recipes = response.result;
  return (
    <>
      <Navbar />
      <Wrapper>
        <HeaderComponent />
        <CategoriesWrapperComponent />
        <InputSearchComponent />

        {/* {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {error && error.message}
            {recipes && recipes.length > 0 && (
              <ul>
                {recipes.map((recipe) => (
                  <li key={recipe.id}>{recipe.name}</li>
                ))}
              </ul>
            )}
          </div>
        )} */}
        <SavedButton />
      </Wrapper>

      <FooterComponent />
    </>
  );
};

export default LandingPage;

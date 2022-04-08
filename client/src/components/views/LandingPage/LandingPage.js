import SavedButton from "../../ui/SaveButton/SaveButton";
import Navbar from "../../ui/Navbar/NavContainer";
import InputSearchComponent from "../../ui/SearchInput/InputLoop";
import { Wrapper } from "../../global-styles/Flex.styled";
import FooterComponent from "../../ui/Footer/Footer";
import HeaderComponent from "../../ui/Header/Header";
import CategoriesWrapperComponent from "../../ui/CategoryWrapper/CategoryWrapper";
import AllDishesComponent from "../../ui/AllDishes/AllDishes";
import useFetchData from "../../../hooks/fetch-data";
import { useState } from "react";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const defaultParams = {
    url: "/recipes",
    method: "GET",
    headers: {
      accept: "*/*",
    },
  };

  let params = defaultParams;
  if (searchTerm === "") {
    params = defaultParams;
  } else {
    params = {
      url: "/recipes/search/" + searchTerm,
      method: "GET",
      headers: {
        accept: "*/*",
      },
    };
  }

  const { response, error } = useFetchData({
    url: params.url,
    method: params.method,
  });

  const renderRecipes = () => {
    if (!error) {
      return <AllDishesComponent recipes={response} />;
    } else if (error) {
      return <div>cannot load recipes</div>;
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <HeaderComponent />
        <CategoriesWrapperComponent />
        <InputSearchComponent setSearchTerm={setSearchTerm} />
        {renderRecipes()}
        <SavedButton />
      </Wrapper>
      <FooterComponent />
    </>
  );
};

export default LandingPage;

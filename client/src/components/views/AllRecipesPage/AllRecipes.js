import React from "react";
import { useState, useEffect } from "react";
import AllDishesComponent from "../../ui/AllDishes/AllDishes";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import CategoriesWrapperComponent from "../../ui/CategoryWrapper/CategoryWrapper";
import InputSearchComponent from "../../ui/SearchInput/InputLoop";
import FooterComponent from "../../ui/Footer/Footer";
import axios from "axios";
import { Pagination } from "../../ui/Pagination/Pagination";

const AllRecipesPage = ({ categories, categoriesLoadingError }) => {
  const [recipes, setRecipes] = useState([]);
  // const [allRecipes, setAllRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); //wpisywany
  const [termToLookup, setTermToLookup] = useState(""); // wpisany w input termin
  const [limitOfRecipes] = useState(4);
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfRecipes, setNumberOfRecipes] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await axios({
      url: `/recipes?limit=${limitOfRecipes}&skip=${skip}`,
    })
      .then((response) => {
        console.log(response);
        const limitedRecipes = response.data.data;
        const recipesLength = response.data.total[0].count;
        // const completeListOfRecipes = response.data.allData;
        // setAllRecipes(completeListOfRecipes);
        setRecipes(limitedRecipes);
        setNumberOfRecipes(recipesLength);
      })
      .catch((error) => console.error(`Error: ${error} `));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [skip, limitOfRecipes, searchTerm === ""]);

  const fetchSearchData = async () => {
    await axios({
      url: "/recipes/search/" + termToLookup,
    })
      .then((response) => {
        const allRecipes = response.data;
        setRecipes(allRecipes);
        // setAllRecipes(allRecipes);
      })
      .catch((error) => console.error(`Error: ${error} `));
    setLoading(false);
  };

  useEffect(() => {
    fetchSearchData();
  }, [termToLookup]);

  const nextPage = () => {
    setSkip(skip + limitOfRecipes);
  };
  const previousPage = () => {
    setSkip(skip - limitOfRecipes);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastRecipe = currentPage * limitOfRecipes;
  const indexOfFirstRecipe = indexOfLastRecipe - limitOfRecipes;
  console.log(recipes);

  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const renderRecipes = () => {
    return <AllDishesComponent recipes={currentRecipes} loading={loading} />;
  };

  return (
    <>
      <FlexWrapper>
        <CategoriesWrapperComponent
          categories={categories}
          categoriesLoadingError={categoriesLoadingError}
        />
        <InputSearchComponent
          setSearchTerm={setSearchTerm}
          setTermToLookup={setTermToLookup}
          searchTerm={searchTerm}
        />
        {renderRecipes()}
        <div>
          <button onClick={previousPage}>Previous Page</button>
          <Pagination
            totalRecipes={numberOfRecipes}
            recipesPerPage={limitOfRecipes}
            paginate={onPageChange}
          />

          <button onClick={nextPage}>Next Page</button>
        </div>
        <FooterComponent />
      </FlexWrapper>
    </>
  );
};
export default AllRecipesPage;

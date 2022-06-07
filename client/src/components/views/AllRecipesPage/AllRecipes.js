import React from "react";
import { useState, useEffect } from "react";
import AllDishesComponent from "../../ui/AllDishes/AllDishes";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import CategoriesWrapperComponent from "../../ui/CategoryWrapper/CategoryWrapper";
import InputSearchComponent from "../../ui/SearchInput/InputLoop";
import FooterComponent from "../../ui/Footer/Footer";
import { PaginatedList, NextPrevButton } from "./AllRecipes.styled";
import axios from "axios";
import { Pagination } from "../../ui/Pagination/Pagination";

const AllRecipesPage = ({ categories, categoriesLoadingError }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); //wpisywany
  const [termToLookup, setTermToLookup] = useState(""); // wpisany w input termin
  const [loading, setLoading] = useState(true);

  const [limitOfRecipes] = useState(4);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [numberOfRecipes, setNumberOfRecipes] = useState();

  const fetchData = async () => {
    await axios({
      url: `/recipes?limit=${limitOfRecipes}&page=${pageNumber}`,
    })
      .then((response) => {
        const limitedRecipes = response.data.filteredData;
        const recipesLength = response.data.pagination.total;
        const totalPages = response.data.pagination.pages;

        setRecipes(limitedRecipes);
        setNumberOfRecipes(recipesLength);
        setNumberOfPages(totalPages);
      })
      .catch((error) => console.error(`Error: ${error} `));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [limitOfRecipes, searchTerm === "", pageNumber, numberOfRecipes]);

  const fetchSearchData = async () => {
    await axios({
      url: "/recipes/search/" + termToLookup,
    })
      .then((response) => {
        const allRecipes = response.data;
        setRecipes(allRecipes);
      })
      .catch((error) => console.error(`Error: ${error} `));
    setLoading(false);
  };

  useEffect(() => {
    fetchSearchData();
  }, [termToLookup]);

  const displayPagination = () => {
    if (termToLookup.length === 0) {
      return (
        <Pagination
          totalRecipes={numberOfRecipes}
          recipesPerPage={limitOfRecipes}
          paginate={setPageNumber}
          numberOfPages={numberOfPages}
          thisPage={pageNumber}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
        />
      );
    }
  };

  const renderRecipes = () => {
    return <AllDishesComponent recipes={recipes} loading={loading} />;
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
        {displayPagination()}

        <FooterComponent />
      </FlexWrapper>
    </>
  );
};
export default AllRecipesPage;

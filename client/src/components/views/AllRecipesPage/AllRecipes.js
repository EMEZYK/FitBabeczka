import React from "react";
import { useState, useEffect } from "react";
import AllDishes from "../../ui/AllDishes/AllDishes";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import CategoriesWrapper from "../../ui/CategoriesWrapper/CategoriesWrapper";
import SearchInputComponent from "../../ui/SearchInput/SearchInput";
import FooterComponent from "../../ui/Footer/Footer";
import axios from "axios";
import { Pagination } from "../../ui/Pagination/Pagination";

const AllRecipesPage = ({
  categories,
  categoriesLoadingError,
  isEditable,
  openModal,
  isAdminPanel,
}) => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [termToLookup, setTermToLookup] = useState("");
  const [loading, setLoading] = useState(true);

  const [limitOfRecipes] = useState(8);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [numberOfRecipes, setNumberOfRecipes] = useState();

  const [deletedRecipeId, setDeletedRecipeId] = useState("");
  const [editedRecipeId, setEditedRecipeId] = useState("");

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
    if (openModal) {
      return;
    }
    fetchData();
  }, [
    limitOfRecipes,
    searchTerm === "",
    pageNumber,
    numberOfRecipes,
    deletedRecipeId,
    editedRecipeId,
    openModal,
  ]);

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
    return (
      <AllDishes
        recipes={recipes}
        loading={loading}
        isEditable={isEditable}
        setDeletedRecipeId={setDeletedRecipeId}
        setEditedRecipeId={setEditedRecipeId}
        categories={categories}
      />
    );
  };

  return (
    <FlexWrapper height="auto" mobilePadding="0">
      <CategoriesWrapper
        categories={categories}
        categoriesLoadingError={categoriesLoadingError}
        isAdminPanel={isAdminPanel}
      />
      <SearchInputComponent
        setSearchTerm={setSearchTerm}
        setTermToLookup={setTermToLookup}
        searchTerm={searchTerm}
      />

      {renderRecipes()}
      {displayPagination()}

      <FooterComponent />
    </FlexWrapper>
  );
};
export default AllRecipesPage;

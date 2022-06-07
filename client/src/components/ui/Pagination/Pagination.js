import React from "react";
import { PaginationList, PageNumber } from "./Pagination.styled";
import { useState } from "react";
import { PaginatedList } from "../../views/AllRecipesPage/AllRecipes.styled";
import { NextPrevButton } from "../../views/AllRecipesPage/AllRecipes.styled";

export const Pagination = ({
  totalRecipes,
  recipesPerPage,
  paginate,
  thisPage,
  numberOfPages,
  setPageNumber,
  pageNumber,
}) => {
  const pageNumbers = new Array(numberOfPages).fill(null).map((v, i) => i);

  const [activePageNumber, setActivePageNumber] = useState(0);

  const toggleActive = (pageNum) => {
    setActivePageNumber(pageNum);
  };

  const nextPage = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  const previousPage = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  return (
    <PaginatedList>
      <NextPrevButton
        onClick={() => {
          previousPage();
          toggleActive(activePageNumber - 1);
        }}
      >
        <a href="#">&laquo;</a>
      </NextPrevButton>
      <PaginationList>
        {pageNumbers.map((page) => (
          <PageNumber
            className={activePageNumber === page ? "active" : ""}
            key={page}
            onClick={() => {
              toggleActive(page);
              paginate(page);
            }}
          >
            <a href="#/" className={activePageNumber === page ? "active" : ""}>
              {page + 1}
            </a>
          </PageNumber>
        ))}
      </PaginationList>
      <NextPrevButton
        onClick={() => {
          toggleActive(activePageNumber + 1);
          nextPage();
        }}
      >
        <a href="#" onClick={nextPage}>
          &raquo;
        </a>
      </NextPrevButton>
    </PaginatedList>
  );
};

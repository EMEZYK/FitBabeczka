import React from "react";
import { PaginationList, PageNumber } from "./Pagination.styled";
import { useState } from "react";

export const Pagination = ({
  totalRecipes,
  recipesPerPage,
  paginate,
  thisPage,
  numberOfPages,
}) => {
  const pageNumbers = new Array(numberOfPages).fill(null).map((v, i) => i);

  const [activePageNumber, setActivePageNumber] = useState(0);

  const toggleActive = (pageNum) => {
    setActivePageNumber(pageNum);
  };

  return (
    <nav>
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
    </nav>
  );
};

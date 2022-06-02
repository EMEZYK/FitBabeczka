import React from "react";
import { PaginationList } from "./Pagination.styled";

export const Pagination = ({ totalRecipes, recipesPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("pageNumbers", pageNumbers);
  return (
    <nav>
      <PaginationList>
        {pageNumbers.map((page) => (
          <li key={page} className="page-item">
            <a href="#/" onClick={() => paginate(page)}>
              {page}
            </a>
          </li>
        ))}
      </PaginationList>
    </nav>
  );
};

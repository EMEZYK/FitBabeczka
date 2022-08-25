import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import AllRecipesPage from "./AllRecipes";
import "@testing-library/jest-dom";

describe("Test AllRecipesPage", () => {
  afterEach(cleanup);

  test("Should take a snapshot',", () => {
    const { asFragment } = render(<AllRecipesPage />);
    expect(asFragment(<AllRecipesPage />)).toMatchSnapshot();
  });

  test("Check if pagination list is displayed", async () => {
    render(<AllRecipesPage />);
    await waitFor(() => {
      const pagination = screen.queryByTestId("pagination");
      expect(pagination).toBeTruthy();
    });
  });

  test("Check if input search is displayed", () => {
    render(<AllRecipesPage />);

    const inputSearch = screen.getByLabelText("Search");
    expect(inputSearch).toBeInTheDocument();
  });

  test("Check if footer is displayed", () => {
    render(<AllRecipesPage />);

    const footer = screen.queryByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});

import React from "react";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import EditMenuPage from "./EditMenuPage";
import "@testing-library/jest-dom";

describe("Test EditMenuPage components", () => {
  afterEach(cleanup);

  test("Should take a snapshot',", () => {
    const { asFragment } = render(<EditMenuPage />);
    expect(asFragment(<EditMenuPage />)).toMatchSnapshot();
  });

  test("Check if add icon has a proper src',", () => {
    render(<EditMenuPage />);
    const addIcon = screen.getByAltText("add-recipe-icon");
    expect(addIcon).toHaveAttribute("src", "/icons/addRecipe.svg");
  });

  test("Check if search input is displayed", () => {
    render(<EditMenuPage />);

    const inputSearch = screen.getByLabelText("Search");
    expect(inputSearch).toBeInTheDocument();
  });

  test("Check if footer is displayed", () => {
    render(<EditMenuPage />);
    const footer = screen.queryByTestId("footer");
    expect(footer).toBeInstanceOf(HTMLElement);
  });
});

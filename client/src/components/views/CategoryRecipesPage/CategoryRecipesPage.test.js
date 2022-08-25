import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import CategoryRecipesPage from "./CategoryRecipesPage";

describe("CategoryRecipesPage components", () => {
  afterEach(cleanup);

  test("Should take a snapshot',", () => {
    const { asFragment } = render(<CategoryRecipesPage />);
    expect(asFragment(<CategoryRecipesPage />)).toMatchSnapshot();
  });

  test("Check if footer is displayed", () => {
    render(<CategoryRecipesPage />);
    const footer = screen.queryByTestId("footer");
    expect(footer).toBeInstanceOf(HTMLElement);
  });

  test("Check if container with recipes is displayed", () => {
    render(<CategoryRecipesPage />);
    const allDishesComponent = screen.queryByTestId("recipes-container");
    expect(allDishesComponent).toBeInstanceOf(HTMLElement);
  });
});

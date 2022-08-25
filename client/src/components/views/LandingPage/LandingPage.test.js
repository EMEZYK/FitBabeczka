import React from "react";
import { Header } from "./LandinPage.styled";
import * as renderer from "react-test-renderer";
import "jest-styled-components";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import LandingPage from "./LandingPage";
import CategoriesWrapperComponent from "../../ui/CategoryWrapper/CategoryWrapper";

describe("LandingPage components", () => {
  afterEach(cleanup);

  test("Should take a snapshot',", () => {
    const { asFragment } = render(<LandingPage />);
    expect(asFragment(<LandingPage />)).toMatchSnapshot();
  });

  test("Renders background image in the header", () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toHaveStyleRule(
      "background",
      "url(/photos/landingPhoto.jpg) top"
    );
  });

  test("Categories component renders correctly", () => {
    const categoriesComponent = renderer
      .create(<CategoriesWrapperComponent />)
      .toJSON();
    expect(categoriesComponent).toMatchSnapshot();
  });

  test("Renders newest recipes", () => {
    render(<LandingPage />);
    const latestRecipes = screen.queryByTestId("recipes-container");
    expect(latestRecipes).toBeInTheDocument();
  });
});

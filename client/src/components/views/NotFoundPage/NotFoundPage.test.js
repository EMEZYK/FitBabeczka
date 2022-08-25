import React from "react";
import "jest-styled-components";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import NotFoundPage from "./NotFoundPage";
import "@testing-library/jest-dom";

describe("NotFoundPage components", () => {
  afterEach(cleanup);

  test("Should take a snapshot',", () => {
    const { asFragment } = render(<NotFoundPage />);
    expect(asFragment(<NotFoundPage />)).toMatchSnapshot();
  });

  test("Renders image", () => {
    render(<NotFoundPage />);
    const page = screen.queryByAltText("not-found-page");
    expect(page).toHaveAttribute("src", "/photos/notFoundPage.jpg");
  });
});

import React from "react";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { Pagination } from "./Pagination";
import { PageNumber } from "./Pagination.styled";
import * as renderer from "react-test-renderer";
import "jest-styled-components";

describe("Pagination components", () => {
  afterEach(cleanup);

  test("Check if takes a snapshot',", () => {
    const { asFragment } = render(<Pagination />);
    expect(asFragment(<Pagination />)).toMatchSnapshot();
  });

  test("Check if page number change bgc when item is active", () => {
    const pagination = renderer.create(<PageNumber />).toJSON();
    expect(pagination).toHaveStyleRule("background-color", "#cc9933", {
      modifier: " &.active ",
    });
  });

  test("Check if page number change color when item is active", () => {
    const pagination = renderer.create(<PageNumber />).toJSON();
    expect(pagination).toHaveStyleRule("color", "#fff", {
      modifier: " &.active ",
    });
  });
});

import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import AboutMePage from "../ContactPage/AboutMePage";

describe("AboutMePage components", () => {
  afterEach(cleanup);

  test("Should take a snapshot',", () => {
    const { asFragment } = render(<AboutMePage />);
    expect(asFragment(<AboutMePage />)).toMatchSnapshot();
  });

  test("Image is rendered", () => {
    render(<AboutMePage />);
    const image = screen.getByAltText("photo-about");
    expect(image).toHaveAttribute("src", "/photos/adminPhoto.png");
  });

  test("Renders greeting =", () => {
    render(<AboutMePage />);
    const greeting = screen.queryByTestId("greeting");
    expect(greeting).toHaveTextContent("Hej! Jestem Ewelina");
  });
});

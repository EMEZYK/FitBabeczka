import React from "react";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { NewRecipeForm } from "./NewRecipeForm";
import "@testing-library/jest-dom";

describe("Test AddRecipeForm components", () => {
  afterEach(cleanup);

  test("Check if takes a snapshot',", () => {
    const { asFragment } = render(<NewRecipeForm />);
    expect(asFragment(<NewRecipeForm />)).toMatchSnapshot();
  });

  test("Check if renders the basic fields", () => {
    render(<NewRecipeForm />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByLabelText("Close")).toBeInTheDocument();
    expect(screen.getByLabelText("name")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Krótki opis" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Przygotowanie" })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("time")).toBeInTheDocument();
    expect(screen.getByLabelText("servings-number")).toBeInTheDocument();
    expect(screen.getByLabelText("photo")).toBeInTheDocument();
    expect(screen.getByLabelText("save")).toBeInTheDocument();
  });

  test("Check if fields are required", () => {
    render(<NewRecipeForm />);
    const nameInput = screen.getByLabelText("name");
    expect(nameInput).toBeRequired();

    const description = screen.getByRole("textbox", { name: "Krótki opis" });
    expect(description).toBeRequired();

    const preparation = screen.getByRole("textbox", { name: "Przygotowanie" });
    expect(preparation).toBeRequired();

    const servingsNumber = screen.getByLabelText("servings-number");
    expect(servingsNumber).toBeRequired();

    const time = screen.getByLabelText("time");
    expect(time).toBeRequired();
  });
});

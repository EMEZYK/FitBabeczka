import React from "react";
import { render, waitFor, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { Ingredient } from "./OneRecipePage.styled";
import { RecipeInfoCard } from "../../ui/Card/InfoCard";
import * as renderer from "react-test-renderer";
import "jest-styled-components";

describe("RecipePage components", () => {
  afterEach(cleanup);

  test("Should take a snapshot',", () => {
    const { asFragment } = render(<RecipeInfoCard />);
    expect(asFragment(<RecipeInfoCard />)).toMatchSnapshot();
  });

  const recipe = {
    name: "Ciasto",
    description:
      "Prosty przepis na pyszne babeczki owocowe. Zobacz jakie to proste i przygotuj dla swoich bliskich rewelacyjne babeczki owocowe",
    ingredients: ["2jajka", "3"],
    preparation:
      "Margarynę i jajka wyciągamy wcześniej z lodówki, wszystkie składniki powinny mieć temperaturę pokojową.Białka ubijamy na gęstą, błyszczącą pianę z połową ilości cukru. Piana powinna wyglądać jak na bezę – ma być sztywna.",
    category: "624e0288e496e43e6830718d",
    servingsNumber: 8,
    time: "45min",
    difficultyLevel: "średni",
  };

  test("Check if time icon is displayed", async () => {
    render(
      <RecipeInfoCard
        details={recipe.time}
        image={"/icons/time.png"}
        alt="preparation-time"
      />
    );

    const infoCard = screen.queryByTestId("info-card");

    await waitFor(() => {
      expect(infoCard).toHaveAttribute("src", "/icons/time.png");
    });
  });

  test("Check if difficultyLevel icon is displayed", async () => {
    render(
      <RecipeInfoCard
        details={recipe.time}
        image={"/icons/medium-level.png"}
        alt="difficulty-level"
      />
    );

    const infoCard = screen.queryByTestId("info-card");

    await waitFor(() => {
      expect(infoCard).toHaveAttribute("src", "/icons/medium-level.png");
    });
  });
  test("Check if servingsNumber icon is displayed", async () => {
    render(
      <RecipeInfoCard
        details={recipe.time}
        image={"/icons/plates.png"}
        alt="servings-number"
      />
    );

    const infoCard = screen.queryByTestId("info-card");

    await waitFor(() => {
      expect(infoCard).toHaveAttribute("src", "/icons/plates.png");
    });
  });
  test("Ingredient style has list-style none", () => {
    const ingredient = renderer.create(<Ingredient />).toJSON();
    expect(ingredient).toHaveStyleRule("list-style", "none");
  });
});

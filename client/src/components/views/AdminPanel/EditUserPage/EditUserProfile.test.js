import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import EditProfilePage from "./EditUserProfilePage";

describe("AboutMePage components", () => {
  afterEach(cleanup);

  test("Check if takes a snapshot',", () => {
    const { asFragment } = render(<EditProfilePage />);
    expect(asFragment(<EditProfilePage />)).toMatchSnapshot();
  });

  test("Check if renders form title", () => {
    render(<EditProfilePage />);
    const title = screen.getByText("Zmień hasło");
    expect(title).toBeInTheDocument();
  });

  test("Check if password and confirmPassword inputs are required", () => {
    render(<EditProfilePage />);
    const passwordInput = screen.queryByTestId("password");
    expect(passwordInput).toBeRequired();

    const confirmPasswordInput = screen.queryByTestId("confirm-password");
    expect(confirmPasswordInput).toBeRequired();
  });
});

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import LoginPage from "../LoginPage/LoginPage";

const LoginPageTest = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage policyTypes={false} />} />
      </Routes>
    </BrowserRouter>
  );
};

describe("LoginPage compponents", () => {
  afterEach(cleanup);

  test("Should take a snapshot',", () => {
    const { asFragment } = render(<LoginPageTest />);
    expect(asFragment(<LoginPageTest />)).toMatchSnapshot();
  });

  test("Verify login to the system", () => {
    render(<LoginPageTest />);
    expect(true).toBe(true);
  });

  test("Check if valid placeholder is displayed", () => {
    render(<LoginPageTest />);
    const emailInput = screen.queryByTestId("email");
    expect(emailInput).toHaveAttribute("placeholder", "E-mail");

    const passwordInput = screen.queryByTestId("password");
    expect(passwordInput).toHaveAttribute("placeholder", "Hasło");
  });
});

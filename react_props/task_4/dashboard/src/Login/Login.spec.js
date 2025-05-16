import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("renders 2 labels, 2 inputs, and 1 button", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /ok/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("label is correctly associated with input", () => {
    render(<Login />);
    const emailLabel = screen.getByText(/email/i);
    expect(emailLabel).toHaveAttribute("for", "email");
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute("id", "email");
  });
});

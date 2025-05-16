import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("renders 2 input, 2 label, and 1 button elements", () => {
    render(<Login />);
    
    // Vérifier les labels
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    
    // Vérifier les inputs
    const emailInput = screen.getByRole("textbox");
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    
    // Vérifier le bouton
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

  test("input gets focused when label is clicked", () => {
    render(<Login />);
    
    const emailLabel = screen.getByText(/email/i);
    const emailInput = screen.getByRole("textbox");
    
    fireEvent.click(emailLabel);
    expect(document.activeElement).toBe(emailInput);
  });
});

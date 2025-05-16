import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("renders without crashing", () => {
    render(<Login />);
  });

  test("renders login form elements", () => {
    render(<Login />);
    
    // Vérifier le texte d'introduction
    const introText = screen.getByText(/Login to access the full dashboard/i);
    expect(introText).toBeInTheDocument();
    
    // Vérifier les champs de formulaire
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /ok/i });
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
}); 
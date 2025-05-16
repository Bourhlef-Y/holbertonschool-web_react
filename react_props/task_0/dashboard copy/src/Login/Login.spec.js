import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("renders 2 input, 2 label, and 1 button elements", () => {
    render(<Login />);
    
    const labels = screen.getAllByRole("label");
    const inputs = screen.getAllByRole("textbox").concat(screen.getByRole("password"));
    const button = screen.getByRole("button");

    expect(labels).toHaveLength(2);
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test("input gets focused when label is clicked", () => {
    render(<Login />);
    
    const emailLabel = screen.getByLabelText(/email/i);
    const emailInput = screen.getByRole("textbox");
    
    fireEvent.click(emailLabel);
    expect(document.activeElement).toBe(emailInput);
  });
});

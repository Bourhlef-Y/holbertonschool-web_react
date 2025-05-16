import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("contains the Holberton logo", () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe("IMG");
  });

  test("contains h1 with text School dashboard", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { 
      level: 1,
      name: /school dashboard/i 
    });
    expect(heading).toBeInTheDocument();
  });
});

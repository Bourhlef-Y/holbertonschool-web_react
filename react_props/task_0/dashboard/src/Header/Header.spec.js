import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("renders without crashing", () => {
    render(<Header />);
  });

  test("renders the logo and the heading", () => {
    render(<Header />);
    const logo = screen.getByAltText("Holberton logo");
    const heading = screen.getByRole("heading", { name: /School dashboard/i });
    
    expect(logo).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
}); 
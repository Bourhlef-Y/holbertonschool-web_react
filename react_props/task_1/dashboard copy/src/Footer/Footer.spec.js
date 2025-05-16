import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { getFooterCopy } from "../utils/utils";

describe("Footer component", () => {
  test("renders correct text when isIndex is true", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const expectedText = `Copyright ${currentYear} - ${getFooterCopy(true)}`;
    
    const footerElement = screen.getByText(new RegExp(expectedText, "i"));
    expect(footerElement).toBeInTheDocument();
  });
});

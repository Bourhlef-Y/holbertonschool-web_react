import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

describe("App component", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("renders all components correctly", () => {
    render(<App />);
    
    // Vérifier que les composants sont rendus
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument(); // Notifications
    expect(screen.getByRole("heading", { name: /School dashboard/i })).toBeInTheDocument(); // Header
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument(); // Login
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`Copyright ${currentYear}`, "i"))).toBeInTheDocument(); // Footer
  });
});

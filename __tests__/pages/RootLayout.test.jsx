import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

describe("MainLayout", () => {
  it("should render the Navbar component", () => {
    const children = <div>Test Children</div>; // Define the children JSX here or assign an appropriate value

    render(<RootLayout
        children={children} 
    />);

    const navbarElement = screen.getByTestId("navbar"); // Replace "navbar" with the test ID or selector of your Navbar component

    expect(navbarElement).toBeInTheDocument();
  });
});
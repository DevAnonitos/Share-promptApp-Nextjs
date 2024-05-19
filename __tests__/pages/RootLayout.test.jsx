import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

describe("MainLayout", () => {
  it("should render RootLayout component", () => {
    expect(RootLayout).toBeDefined()
    expect(RootLayout).toMatchSnapshot()
  });
});
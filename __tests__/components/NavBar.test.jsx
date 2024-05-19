import { Navbar } from "@/components";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

describe("NavbarComponent", () => {
  it("Should render NavbarComponents", () => {
    expect(Navbar).toBeDefined()
    expect(Navbar).toMatchSnapshot()
  })
})
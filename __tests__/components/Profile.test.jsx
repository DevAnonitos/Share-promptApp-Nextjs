import React from "react";
import { Profile } from "@/components";
import { render, screen, waitFor } from "@testing-library/react";

describe("ProfileComponent", () => {
  it("should render Profile Component", () => {
    expect(Profile).toBeDefined()
    expect(Profile).toMatchSnapshot()
  })
})
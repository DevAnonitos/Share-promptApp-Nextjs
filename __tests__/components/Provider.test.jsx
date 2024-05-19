import { Provider } from "@/components";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

describe("ProviderComponent", () => {
  it("should render Provider Components", () => {
    expect(Provider).toBeDefined()
    expect(Provider).toMatchSnapshot()
  })
})
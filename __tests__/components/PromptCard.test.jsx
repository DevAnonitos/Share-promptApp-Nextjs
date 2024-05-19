import { PromptCard } from "@/components";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

describe("PromptCardComponent", () => {
  it("should render a PromptCard Component", () => {
    expect(PromptCard).toBeDefined()
    expect(PromptCard).toMatchSnapshot()
  })
})
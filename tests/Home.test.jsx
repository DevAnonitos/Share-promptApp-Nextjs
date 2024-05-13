import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe('HomePage', () => {
  
  it("should render a HomePage text", () => {
    render(<HomePage />)
  
    expect(screen.getAllByText("Discover & Share"))
    expect(screen.getAllByText("Generative AI-Prompts"))
    // expect(screen.getAllByText("PromptApp is an open-source AI prompting tool for modern world to discover, create and share creative prompt"))

    
  })
})

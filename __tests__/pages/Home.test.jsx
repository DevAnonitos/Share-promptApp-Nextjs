import React from "react";
import HomePage from "@/app/page";
import { render, screen, waitFor } from "@testing-library/react";


jest.mock('@/components/Feed', () => ({
  __esModule: true,
  default: () => <div data-testid="feed-mock">Mocked Feed</div>,
}));

describe('HomePage', () => {
  
  it("should render a HomePage Header text", () => {
    render(<HomePage />)
  
    expect(screen.getAllByText("Discover & Share")).toMatchSnapshot();
    expect(screen.getAllByText("Generative AI-Prompts")).toMatchSnapshot();
    
  })

  it('should render the description text', () => {
    const { getByText } = render(<HomePage />);
    expect(
      getByText(/PromptApp is an open-source AI prompting tool for modern world to discover, create and share creative prompts./)
    ).toBeInTheDocument();
    expect(
      getByText(/PromptApp is an open-source AI prompting tool for modern world to discover, create and share creative prompts./)
    ).toMatchSnapshot();
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
});

  it("should render the Feed Component", async () => {
    render(<HomePage />)

    expect(screen.getByTestId('feed-mock')).toMatchSnapshot();
  })
})

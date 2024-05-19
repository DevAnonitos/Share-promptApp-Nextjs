import { Feed } from "@/components";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

describe("FeedComponent", () => {

  // Finding placeholder for the search input
  it("should render the Search Field Text", () => {
    render(<Feed />)
      expect(screen.getByPlaceholderText("Search for a tag or a username...")).toMatchSnapshot()
  })

  it("should render the FeedComponent", () => {
    expect(Feed).toBeDefined()
    expect(Feed).toMatchSnapshot()
  })
})
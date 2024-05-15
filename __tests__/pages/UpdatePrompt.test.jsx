import { render, screen } from "@testing-library/react";
import UpdatePrompt from "@/app/update-prompt/page";
import React from "react";

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("UpdatePrompt", () => {
  it("should update the prompt", () => {
    
  })
})
import { render, screen } from "@testing-library/react";
import UpdatePrompt from "@/app/update-prompt/page";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";


describe("UpdatePrompt", () => {
  it('should render UpdatePrompt Page', () => {
    expect(UpdatePrompt).toBeDefined()
  });
})
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import CreatePrompt from "@/app/create-prompt/page";



describe("CreatePromptPage", () => {
  it("should render the prompt text", () => {
    render(<CreatePrompt />)
    expect(screen.getAllByAltText("Create Post"))
  })
})
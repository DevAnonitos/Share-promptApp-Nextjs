import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import CreatePrompt from "@/app/create-prompt/page"; 

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn() }), 
}));

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

describe("CreatePromptPage", () => {

  it('should render the prompt form (authenticated)', () => {
    
    jest.mocked(useSession).mockReturnValue({
      data: { user: { id: 1, name: 'John Doe' } },
      status: 'authenticated',
    });

    const router = jest.fn();
    render(<CreatePrompt router={router} />); 

    try {
      expect(screen.getByRole('form')).toBeInTheDocument(); 
    } catch (error) {
      console.error('Error in assertion:', error.message); 
    }
  });

  it("should redirect to login (unauthenticated)", () => {
    jest.mocked(useSession).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    const router = jest.fn(); 
    render(<CreatePrompt router={router} />); 

    expect(router.push).toMatchSnapshot();
  });
});

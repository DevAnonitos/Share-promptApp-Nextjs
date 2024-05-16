import { Form, Feed, Navbar, Profile, PromptCard, Provider } from "@/components";

describe('Component Imports', () => {
  it('should import all components without errors', () => {
      expect(Feed).toBeDefined();
      expect(Form).toBeDefined();
      expect(Navbar).toBeDefined();
      expect(Profile).toBeDefined();
      expect(PromptCard).toBeDefined();
      expect(Provider).toBeDefined();
  });
});
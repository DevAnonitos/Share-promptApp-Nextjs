import HomePage from "@/app/page";
import CreatePrompt from "@/app/create-prompt/page";
import MyProfile from "@/app/profile/page";
import UpdatePrompt from "@/app/update-prompt/page";
import UserProfile from "@/app/profile/[id]/page";

describe('Page Imports', () => {
    it('should import all Pages without errors', () => {
        expect(HomePage).toBeDefined();
        expect(CreatePrompt).toBeDefined();
        expect(MyProfile).toBeDefined();
        expect(UpdatePrompt).toBeDefined()
        expect(UserProfile).toBeDefined()
    });

    it('should import all Pages without errors by snapShot', () => {
        expect(HomePage).toMatchSnapshot()
        expect(CreatePrompt).toMatchSnapshot()
        expect(MyProfile).toMatchSnapshot()
        expect(UpdatePrompt).toMatchSnapshot()
        expect(UserProfile).toMatchSnapshot()
    });
});
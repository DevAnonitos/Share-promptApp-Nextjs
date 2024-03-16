import { connectToDB } from "@/libs/utils/database";
import Prompt from "@/libs/models/prompt";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();

        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {
            status: 201,
        });
    } catch (error) {
        return new Response("Fail to create a new prompt", {
            status: 500,
        });
    }
};

import Prompt from "@/models/prompt";
import { connectToDB } from "@/libs/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON("Fail to fetch All prompts", {
            status: 500,
        }))
    }
};

import Prompt from "@/libs/models/prompt";
import { connectToDB } from "@/libs/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Fail to fetch All prompts"), {
            status: 500,
        });
    }
};

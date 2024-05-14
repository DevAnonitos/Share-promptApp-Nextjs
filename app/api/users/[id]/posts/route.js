import Prompt from "@/libs/models/prompt";
import { connectToDB } from "@/libs/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        if(!params || !params.id) {
            return new Response("UserId is missing", {
                status: 400,
            });
        }

        const prompts = await Prompt.find({ creator: params.id }).populate("creator");

        return new Response(JSON.stringify(prompts), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch prompts created by user", {
            status: 500
        });
    }
};

import Prompt from "../../../../models/prompt";
import { connectToDB } from "../../../../utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id).populate("creator");

        if(!prompt) {
            return new Response("Prompt not found", {
                status: 404,
            });
        }

        return new Response(JSON.stringify(prompt), {
            status: 200,
        });
    } catch (error) {
        return new Response("Internal Server Error", {
            status: 500,
        });
    }
};

export const PATH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt) {
            return new Response("Prompt not founded", {
                status: 404,
            });
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        return new Response("Successfully update-prompt!", {
            status: 200,
        });

    } catch (error) {
        return new Response("Error updating Prompt", {
            status: 500,
        });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt delete successfully", {
            status: 200,
        });
    } catch (error) {
        return new Response("Error deleting prompt", {
            status: 500,
        });
    }
};

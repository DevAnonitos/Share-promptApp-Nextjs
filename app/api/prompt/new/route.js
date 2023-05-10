import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();

        return new Response(JSON.stringify(), {
            status: 201,
        })
    } catch (error) {
        return new Response("Fail to create a new prompt", {
            status: 500,
        })
    }
};

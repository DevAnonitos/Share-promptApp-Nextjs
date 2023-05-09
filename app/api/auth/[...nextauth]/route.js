import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/database";
import User from "@/models/user";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email,
            })

            if (!sessionUser) {
                console.warn(`User not found in database: ${session.user.email}`);
                return session;
            }

            session.user.id = sessionUser._id.toString();

            return session;
        },

        async signIn({ profile }) {
            try {
                await connectToDB();

                const userExists = await User.findOne({
                    email: profile.email,
                });

                if(!userExists) {
                    console.log(`Creating new user: ${profile.email}`)
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                    });
                }else {
                    console.log(`User found in database: ${profile.email}`);
                }

                return true;
            } catch (error) {
                console.log("Error checking if user exists: ", error.message);
                return {
                    error: "signIn",
                    message: "Failed to sign in. Please try again.",
                    statusCode: 401,
                };
            }
        },
    }
});

export {
    handler as GET,
    handler as POST,
};

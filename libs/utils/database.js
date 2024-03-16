import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("MongoDb has already connected!");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_promptApp",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoCreate: true,
            autoIndex: true,
        });

        isConnected = true;

        console.log('MongoDb connected!');
    } catch (error) {
        console.log("Failed to connect to MongoDb: ", error.message);
        throw new Error("Failed to connect to MongoDb");
    }
};

import mongoose from "mongoose";

export const dbConnection = async () => {

try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database successfully");
} catch (error) {
    console.log("Error while connecting to the database", error);
    }
}
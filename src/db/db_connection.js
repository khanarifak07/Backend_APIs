import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `✅ Connected to MongoDB !! ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("❌ Error while connecting to databse", error);
    process.exit(1); //1 is use for failure
  }
};

export { connectDB };

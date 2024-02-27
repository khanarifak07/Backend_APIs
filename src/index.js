import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/db_connection.js";
dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error while connecting to MongoDB", error);
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
const app = express();

//cors configuration (cross origin resource sharing)
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS,
  }),
); //app.use means its a middleware

//json configuration via express
app.use(express.json({ limit: "16kb" }));
//url configuration via express
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//cookie-parser configuration
app.use(cookieParser());
//assets configuration eg. files, pdf, images, etc
app.use(express.static("public"));

export { app };

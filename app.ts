import mongoose from "mongoose";
import express, { Application } from "express";
import cors from "cors";
import router from "./src/app/routes/routes";
const app: Application = express();
import dotenv from "dotenv";
import notFound from "./src/app/middleware/notFoundHandler";
dotenv.config();

// parsers
app.use(express.json());
app.use(cors());

// application level routes
app.use("/api", router);

// global eroor handler whith middleware
// app.use(globalEroorHandler);
// // notFound  handler
app.use(notFound);

export default app;

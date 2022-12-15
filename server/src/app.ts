import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import express from "express";
import { router } from "./routes/pets.routes";
import { errorMiddleware } from "./middlewares/errorMiddleware";

export const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use(errorMiddleware);

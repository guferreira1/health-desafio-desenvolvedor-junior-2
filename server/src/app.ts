import express from "express";
import "reflect-metadata";
import { router } from "./routes/pets.routes";

export const app = express();

app.use(express.json());

app.use(router);

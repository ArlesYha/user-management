import userRouter from "#Routes/user.routes.js";
import express from "express";

const expressApp = express();

// Todo añadir middlewares, routes...
expressApp.use(express.json());
expressApp.use(express.text());

expressApp.use('/user', userRouter);

export default expressApp;
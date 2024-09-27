import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: Process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "1mb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "1mb"
}));

app.use(express.static("pubblic"));


app.use(cookieParser());

export { app };
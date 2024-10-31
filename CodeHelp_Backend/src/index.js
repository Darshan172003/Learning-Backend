import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
    res.send("Learning Express From CodeHelp")
})

app.listen(port, () => {
    console.log(`Server is running on port http://127.0.0.1:${port}/`)
})

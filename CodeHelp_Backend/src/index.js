import express from "express";
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use("/api", userRouter);


// We wirte all request in routes folder and import here this is industry standard
// app.get('/', (req, res) => {
//     res.send("Learning Express From CodeHelp,  Got a GET request")
// })

// app.post('/sign-in', (req, res) => {
//     res.send("Got a POST request")
// })

// app.put('/update-profile', (req, res) => {
//     res.send("Got a PUT request")
// })

// app.delete('/delete-profile', (req, res) => {
//     res.send("Got a DELETE request")
// })

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`)
})

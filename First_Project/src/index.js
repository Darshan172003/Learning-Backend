import mongoose from 'mongoose';
import {DB_NAME} from './constants.js';
import express from 'express';
import 'dotenv/config'
import connectDB from './db/db.js';

// const app = express();

connectDB();


/*
(async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,)
        app.on('error', () => {
            console.error("Error connecting to MongoDB");
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log("Server is running on port ", process.env.PORT);
        })
    } catch (error) {
        console.error("MongoDB connection Error",error);
        throw error;
    }
})(); // IIFE */
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables
console.log('DB_URI:', process.env.DB_URI);


import express from 'express';
import { connectDb } from './db/connectDb.js';

const app = express();

app.listen(3000, async () => {
    await connectDb();
    console.log("Server is running on port 3000..");
});

app.get("/", (req, res) => {
    res.send("Auth");
});

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables


import authRoutes from "./routes/authRoutes.js"
import express from 'express';
import { connectDb } from './db/connectDb.js';

const app = express();

app.get("/", (req, res) => {
    res.send("Auth");
});

app.use("/api/auth", authRoutes)


app.listen(3000, async () => {
    await connectDb();
    console.log("Server is running on port 3000..");
});
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables


import authRoutes from "./routes/authRoutes.js"
import express from 'express';
import { connectDb } from './db/connectDb.js';

const app = express();
const PORT = process.env.PORT|| 5000;

app.use(express.json()); //Allows us to parse incoming requests with Json Playload;

app.use("/api/auth", authRoutes)

app.listen(PORT, async () => {
    await connectDb();
    console.log("Server is running on port: ",PORT);
});
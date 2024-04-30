import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import authMiddleware from "./middleware/authMiddleware.js";
import connectToDB from "./DB/connectDB.js";
import todoRoutes from "./routes/TodoRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
//middleware
app.use(express.json());

//routes
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api", todoRoutes);

//protected route
app.get("/api/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to the dashboard!" });
});

//starting server
app.listen(8080, () => {
  connectToDB();
  console.log(`Server is running on port 8080`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

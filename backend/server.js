import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// 1️⃣ Load env variables FIRST
dotenv.config();

// 2️⃣ DEBUG CHECK (IMPORTANT)
console.log("ENV CHECK (MONGO_URI):", process.env.MONGO_URI);

// 3️⃣ App init
const app = express();

// 4️⃣ Database connect
connectDB();

// 5️⃣ Middlewares
app.use(cors());
app.use(express.json());

// 6️⃣ Test route
app.get("/", (req, res) => {
  res.send("Rentify Backend is running 🚀");
});

// 7️⃣ Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

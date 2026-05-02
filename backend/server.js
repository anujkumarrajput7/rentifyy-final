import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/properties", propertyRoutes);
// Routes
app.get("/", (req, res) => {
  res.send("Rentify Backend is running 🚀");
});

// ✅ ADD THIS (Step 4)
app.use("/api/users", userRoutes);

// Start server AFTER DB connects
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("DB Connection Failed ❌", error);
    process.exit(1);
  }
};

startServer();
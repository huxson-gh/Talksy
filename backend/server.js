import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import connectDB from "./lib/db.js";
import connectCloudinary from "./lib/cloudinary.js";
import userRouter from "./routes/userRoutes.js";

// Create Express app with HTTP server
const app = express();
const server = http.createServer(app);


// Middleware setup
app.use(express.json({ limit: "5mb" }));
app.use(cors());


// Routes setup
app.get("/", (req, res) => {
  res.send("Welcome to Talksy API");
});
app.use("/api/status", (req, res) => res.send("Server is live"));

app.use("/api/auth", userRouter);



// Connect to MongoDB
await connectDB();



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));


// Export server
export default server;

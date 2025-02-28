import express from "express";
import cors from "cors";
import "dotenv/config";
import { SquareClient, SquareEnvironment } from "square";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
console.log("SQUARE TOKEN FROM ENV:", process.env.VITE_SQUARETOKEN);
const client = new SquareClient({
  environment: SquareEnvironment.Sandbox,
  accessToken: process.env.VITE_SQUARETOKEN,
});

app.get("/api/catalog", async (_req, res) => {
  try {
    const { result } = await client.catalog.list(undefined, "ITEM");
    console.log(result);

    res.json(result.objects);
  } catch (error) {
    console.error("Error retrieving items:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

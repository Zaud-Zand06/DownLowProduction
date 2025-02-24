import express from "express";
import cors from "cors";
import { SquareClient, SquareEnvironment } from "square";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const client = new SquareClient({
  environment: SquareEnvironment.Sandbox,
  accessToken: import.meta.env.VITE_SQUARETOKEN,
});

app.get("/api/catalog", async (_req, res) => {
  try {
    const { result } = await client.catalog.list(undefined, "ITEM");
    res.json(result.objects);
  } catch (error) {
    console.error("Error retrieving items:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

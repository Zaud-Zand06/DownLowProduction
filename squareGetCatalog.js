import express from "express";
import cors from "cors";
import "dotenv/config";
import { SquareClient, SquareEnvironment } from "square";

BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
console.log("SQUARE TOKEN FROM ENV:", process.env.VITE_SQUAREPRODUCTIONTOKEN);
const client = new SquareClient({
  environment: SquareEnvironment.Production,
  token: process.env.VITE_SQUAREPRODUCTIONTOKEN,
});

app.get("/api/catalog", async (req, res) => {
  try {
    const result = await client.catalog.searchItems({
      // this pulls all catalog items from dlev
      enabledLocationIds: ["LB3TMDHWH2ZB3"],
    });
    res.json(result);
  } catch (error) {
    console.error("Error retrieving items:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/catalog/object/:objectId", async (req, res) => {
  try {
    const objectId = req.params.objectId;

    const result = await client.catalog.batchGet({
      objectIds: [objectId],
      includeRelatedObjects: true,
      includeCategoryPathToRoot: false,
      includeDeletedObjects: false,
    });

    res.json(result);
  } catch (error) {
    console.error("Error retrieving object from objectId:", error);
    res.status(500).json({ error: error.message });
  }
});
//TODO: test this code
app.post("/api/order", async (req, res) => {
  const { order } = req.body;
  try {
    const result = await client.orders.createOrder(order);
    res.json(result);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

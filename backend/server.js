import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import dbConnection from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";

// rest object
const app = express();

// config dotenv
dotenv.config();

app.use(express.json());

// cors configuration
app.use(cors());

// db connection called
dbConnection();

const PORT = process.env.PORT || 8080;

app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgYellow);
});

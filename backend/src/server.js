import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import cors from "cors";

const __dirname = path.resolve();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/inngest", serve({ client: inngest, functions }));

//connecting to mongodb
import connectDB from "./lib/db.js";

app.get("/api/health", (req, res) => {
  res.send("api is running");
});

//make our app ready for production
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

const startServer = () => {
  try {
    app.listen(ENV.PORT, async () => {
      await connectDB();
      console.log(`Server is running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();

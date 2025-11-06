import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";

const __dirname = path.resolve();

const app = express();

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

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});

import mongoose from "mongoose";
import { ENV } from "./env.js";
import path from "path";

const __dirname = path.resolve();

const connectDB = async () => {
  try {
    let conn = await mongoose.connect(ENV.DB_URI, {});
    console.log("Connected to MongoDB ", conn.connection.host);
  } catch (err) {
    console.error(err);
    process.exit(1); // o means success and 1 means error
  }
};

export default connectDB;

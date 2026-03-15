import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";

import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
// console.log(process.env.MONGO_URI);
const port = process.env.PORT || 3000;
const __dirname = path.resolve();
// console.log(__dirname); D:\notes\100Xdev\mern-notes-app\backend

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.use(express.json());
app.use(rateLimiter);

//custom middleware
// app.use((req, res, next) => {
//   console.log("req method is :", req.method , "req url is :" ,  req.url);
//   next();
// });

app.use("/api/notes", notesRoutes);
// An endpoint is a specific URL + HTTP method combination that your server listens on and responds to.

//serving optimised react app(dist) as static asset.
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB()
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`)),
  )
  .catch((err) => {
    console.error("DB connection failed:", err);
    process.exit(1);
  });

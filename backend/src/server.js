import express from "express";

import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();
// console.log(process.env.MONGO_URI);
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(rateLimiter);
//custom middleware
// app.use((req, res, next) => {
//   console.log("req method is :", req.method , "req url is :" ,  req.url);
//   next();
// });

app.use("/api/notes", notesRoutes);
// An endpoint is a specific URL + HTTP method combination that your server listens on and responds to.

connectDB().then(() => {
  // Start server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

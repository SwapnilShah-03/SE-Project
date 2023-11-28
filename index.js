import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import clientRouter from "./Routes/Client.js";
import serverRouter from "./Routes/Server.js";
/* setting up server */
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.engine("ejs", ejsMate);
app.set("views", "views");
app.set("view engine", "ejs");
/* setting up database and starting the server 
  SET YOUR MONGO URL AND PORT IN .env FILE */

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port: ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

/* setting up routes */

// set up your routes here
app.use("/client", clientRouter);
app.use("/server", serverRouter);

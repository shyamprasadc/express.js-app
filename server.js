const express = require("express");
const app = express();
const dotenv = require("dotenv").config()
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json())
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter)
 
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

app.listen(3000, () => console.log("server started"));

const express = require("express");
const mongoose = require("mongoose");
const router = require("./api/routers/index")

require('dotenv').config()

const app = express();

app.use(express.json());

const url = process.env.MONGO_URL


mongoose.connect(url, {useNewUrlParser: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to database successfully");
});

app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Server is running at port 3000");
});


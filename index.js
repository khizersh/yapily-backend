const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3001;

const MainRoute = require("./routes/main");

const app = express();
const cors = require("cors");



app.get("/", (req, res) => {
  res.send("Express app working");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});

app.use("/api", MainRoute);




mongoose.set("strictQuery", false);





app.listen(port, () => console.log(`Listening on port ${port}`));

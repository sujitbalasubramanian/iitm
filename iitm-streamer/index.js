const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const device = require("./routes/devices");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB || "mongodb://0.0.0.0:27017/iitm-streamer")
  .then((_) => {
    console.log("db connected sucessfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/devices", device);

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`server started at ${port}`);
});

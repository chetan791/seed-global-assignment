const express = require("express");
const cors = require("cors");
const connection = require("./src/config/DB");
const app = express();

app.use(cors());

app.listen(process.env.port, async() => {
  try {
    await connection;
    console.log("Server is running on port " + process.env.port);
  } catch (error) {
    console.log("error connecting to database",error);
  }
});

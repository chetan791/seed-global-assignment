const express = require("express");
const cors = require("cors");
const connection = require("./src/config/DB");
const studentRouter = require("./src/Router/StudentRouter");
const universityRouter = require("./src/Router/UniversityRouter");
const EnqueriesRouter = require("./src/Router/Enqueries.Router");
const EnrolledRouter = require("./src/Router/EnrolledRouter");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/students", studentRouter);
app.use("/university", universityRouter);
app.use("/enquries", EnqueriesRouter);
app.use("enroll", EnrolledRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is running on port " + process.env.port);
  } catch (error) {
    console.log("error connecting to database", error);
  }
});

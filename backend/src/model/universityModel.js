const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    courses: {
      type: [String],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const universityModel = mongoose.model("university", universitySchema);

module.exports = universityModel;

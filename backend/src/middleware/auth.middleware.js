const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  token = req.headers.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, "secretkey");
    if (decoded) {
      req.body.universityID = decoded.universityID;
      req.body.studentID = decoded.studentID;
      req.body.name = decoded.name;
      req.body.email = decoded.email;
      next();
    } else {
      res.send("not authorized");
    }
  } else {
    res.send("please login");
  }
};

module.exports = auth;

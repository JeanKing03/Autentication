const bcrypt = require("bcrypt");
const catchError = require("../utils/catchError");

const hash = catchError(async (req, res, next) => {
  const { password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  req.passwordHashed = hash;
  next();
});

module.exports = hash;

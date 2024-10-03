const {
  createServices,
  getAllSevices,
  getOneServices,
  updateServices,
  removeServices,
} = require("../services/user.services");
const catchError = require("../utils/catchError");
const jwt = require("jsonwebtoken");

const create = catchError(async (req, res) => {
  const body = { ...req.body, password: req.passwordHashed };
  const result = await createServices(body);
  return res.json(result);
});

const getAll = catchError(async (req, res) => {
  const result = await getAllSevices();
  return res.json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await getOneServices(id);
  return res.json(result);
});

const update = catchError(async (req, res) => {
  const { firstName, lastName, image } = req.body;
  const { id } = req.params;
  const result = await updateServices({ firstName, lastName, image }, id);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await removeServices(id);
  return res.status(204);
});

const login = catchError(async (req, res) => {
  const user = req.userLogin;
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ user }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return res.json({ user, token });
});

const logged = catchError(async (req, res) => {
  const user = req.user;
  console.log(user);
  return res.json(user);
});

module.exports = { create, getAll, getOne, update, remove, login, logged };

const {
  createServices,
  getAllSevices,
  getOneServices,
  updateServices,
  removeServices,
  setPostsServices,
} = require("../services/user.services");
const catchError = require("../utils/catchError");
const jwt = require("jsonwebtoken");

const create = catchError(async (req, res) => {
  const body = { ...req.body, password: req.passwordHashed };
  const result = await createServices(body);
  return res.status(201).json(result);
});

const getAll = catchError(async (req, res) => {
  const { id } = req.user;
  const result = await getAllSevices(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await getOneServices(id);
  if (!result) return res.sendStatus(404).json({ Message: "User Not Found" });
  return res.json(result);
});

const update = catchError(async (req, res) => {
  const { firstName, lastName, image } = req.body;
  const { id } = req.params;
  const result = await updateServices({ firstName, lastName, image }, id);
  if (result[0] === 0)
    return res.sendStatus(404).json({ Message: "User Not Found" });
  return res.json(result[1][0]);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await removeServices(id);
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const setPosts = catchError(async (req, res) => {
  const result = await setPostsServices({
    ...req.body,
    userLikeId: req.user.id,
  });
  if (!result) return res.sendStatus(404);
  return res.json(result);
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
  if (!user) return res.status(401).json({ error: "You Need To Be Logged In" });
  return res.json(user);
});

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
  login,
  logged,
  setPosts,
};

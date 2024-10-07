const {
  createServices,
  getAllServices,
  getOneServices,
  updateServices,
  removeServices,
} = require("../services/post.services");
const catchError = require("../utils/catchError");

const create = catchError(async (req, res) => {
  const body = { ...req.body, userId: req.user.id };
  const result = await createServices(body);
  return res.json(result);
});

const getAll = catchError(async (req, res) => {
  const result = await getAllServices();
  if (!result) return res.sendStatus(404);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await getOneServices(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { post } = req.body;
  const result = await updateServices({ post }, id);
  if (!result) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await removeServices(id);
  console.log(result);
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

module.exports = { create, getAll, getOne, update, remove };

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
  return res.json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await getOneServices(id);
  return res.json(result);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { post } = req.body;
  const result = await updateServices({ post }, id);
  return res.json(result[1]);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await removeServices(id);
  return res.status(204);
});

module.exports = { create, getAll, getOne, update, remove };

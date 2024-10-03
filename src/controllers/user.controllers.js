const {
  createServices,
  getAllSevices,
  getOneServices,
  updateServices,
  removeServices,
} = require("../services/user.services");
const catchError = require("../utils/catchError");

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
  const { id } = req.params;
  const result = await updateServices(req.body, id);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await removeServices(id);
  return res.status(204);
});

module.exports = { create, getAll, getOne, update, remove };

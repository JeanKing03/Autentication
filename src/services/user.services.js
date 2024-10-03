const User = require("../models/User");

const createServices = async (user) => {
  return await User.create(user);
};

const getAllSevices = async () => {
  return await User.findAll();
};

const getOneServices = async (id) => {
  return await User.findByPk(id);
};

const updateServices = async (info, id) => {
  return await User.update(info, { where: { id }, returning: true });
};

const removeServices = async (id) => {
  return await User.destroy({ where: { id } });
};

module.exports = {
  createServices,
  getAllSevices,
  getOneServices,
  updateServices,
  removeServices,
};

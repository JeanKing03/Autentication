const Post = require("../models/Post");

const createServices = async (post) => {
  return await Post.create(post);
};

const getAllServices = async () => {
  return await Post.findAll();
};

const getOneServices = async (id) => {
  return await Post.findByPk(id);
};

const updateServices = async (info, id) => {
  return await Post.update(info, { where: { id } });
};

const removeServices = async (id) => {
  return await Post.destroy({ where: { id }, returning: true });
};

module.exports = {
  createServices,
  getAllServices,
  getOneServices,
  updateServices,
  removeServices,
};

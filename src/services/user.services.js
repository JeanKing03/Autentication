const Favorite = require("../models/Favorite");
const Post = require("../models/Post");
const User = require("../models/User");
const getOneServicesPost = require("./post.services");

const createServices = async (user) => {
  return await User.create(user);
};

const getAllSevices = async () => {
  return await User.findAll({
    include: [
      { model: Post },
      {
        model: Favorite,
        include: [
          {
            model: Post,
            attributes: ["post", "createdAt"],
            include: [
              { model: User, attributes: ["firstName", "lastName", "image"] },
            ],
          },
        ],
      },
    ],
  });
};

const getOneServices = async (id) => {
  return await User.findByPk(id, {
    include: [
      {
        model: Post,
      },
      {
        model: Favorite,
        include: [
          {
            model: Post,
            attributes: ["post", "createdAt"],
            include: [
              {
                model: User,
                attributes: ["firstName", "lastName", "image"],
              },
            ],
          },
        ],
      },
    ],
  });
};

const updateServices = async (body, id) => {
  return await User.update(body, { where: { id }, returning: true });
};

const removeServices = async (id) => {
  return await User.destroy({ where: { id } });
};

const getUserServices = async (email) => {
  return await User.findOne({ where: { email } });
};

const setPostsServices = async (body) => {
  const likes = await Favorite.create(body);
  return likes;
};

module.exports = {
  createServices,
  getAllSevices,
  getOneServices,
  updateServices,
  removeServices,
  getUserServices,
  setPostsServices,
};

const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Post = sequelize.define("post", {
  post: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

//* Post -> User

module.exports = Post;

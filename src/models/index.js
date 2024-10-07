const Favorite = require("./Favorite");
const Post = require("./Post");
const User = require("./User");

//* User <-> Favorite
Favorite.belongsTo(User, { foreignKey: "userLikeId" });
User.hasMany(Favorite, { foreignKey: "userLikeId" });

//* Post <-> Favorite
Favorite.belongsTo(Post, { foreignKey: "postId" });
Post.hasMany(Favorite, { foreignKey: "postId" });

//* Post -> User
Post.belongsTo(User);
User.hasMany(Post);

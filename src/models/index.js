const Post = require("./Post");
const User = require("./User");

//* Post <-> User
User.belongsToMany(Post, { through: "favorites" });
Post.belongsToMany(User, { through: "favorites" });

//* Post -> User
Post.belongsTo(User);
User.hasMany(Post);

const express = require("express");
const {
  create,
  getAll,
  getOne,
  update,
  remove,
  login,
  logged,
  setPosts,
} = require("../../controllers/user.controllers");
const { verifyJWT } = require("../../utils/verifyJWT");
const hash = require("../../middleware/hash.middlewares");
const credentials = require("../../middleware/login.middlewares");

const routerUser = express.Router();

routerUser.route("/").post(hash, create).get(verifyJWT, getAll);
routerUser.route("/login").post(credentials, login);
routerUser.route("/me").get(verifyJWT, logged);
routerUser
  .route("/:id")
  .get(verifyJWT, getOne)
  .put(verifyJWT, update)
  .delete(verifyJWT, remove);
routerUser.route("/set-post").post(verifyJWT, setPosts);

module.exports = routerUser;

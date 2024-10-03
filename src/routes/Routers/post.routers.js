const express = require("express");
const {
  create,
  getAll,
  remove,
  update,
  getOne,
} = require("../../controllers/post.controllers");
const { verifyJWT } = require("../../utils/verifyJWT");

const routerPost = express.Router();

routerPost.route("/").post(verifyJWT, create).get(getAll);

routerPost
  .route("/:id")
  .get(getOne)
  .put(verifyJWT, update)
  .delete(verifyJWT, remove);

module.exports = routerPost;

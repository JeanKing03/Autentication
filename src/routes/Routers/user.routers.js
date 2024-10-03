const express = require("express");
const {
  create,
  getAll,
  getOne,
  update,
  remove,
} = require("../../controllers/user.controllers");
const hash = require("../../middleware/hash.middleware");

const routerUser = express.Router();

routerUser.route("/").post(hash, create).get(getAll);

routerUser.route("/:id").get(getOne).put(update).delete(remove);

module.exports = routerUser;

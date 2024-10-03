const express = require("express");
const routerUser = require("./Routers/user.routers");
const routerPost = require("./Routers/post.routers");
const router = express.Router();

// colocar las rutas aquí
router.use("/users", routerUser);
router.use("/posts", routerPost);

module.exports = router;

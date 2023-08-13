const express = require("express");
const router = express.Router();
const usersHandler = require("./handler/users");

// register api
router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.post("/logout", usersHandler.logout);
router.put("/:id", usersHandler.update);
router.get("/:id", usersHandler.getUserById);
router.get("/", usersHandler.getUsers);

module.exports = router;

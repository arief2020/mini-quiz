const express = require("express");
const AuthController = require("../controllers/auth.controller");
const { authentication } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/login", AuthController.login);

router.post("/register", AuthController.register);

router.get("/me",authentication, AuthController.me);

router.put("/me", authentication, AuthController.updateMe);

router.delete("/me", authentication, AuthController.deleteMe);

router.post("/logout", authentication, AuthController.logout);

module.exports = router;

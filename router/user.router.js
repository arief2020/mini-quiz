const express = require("express");
const UserController = require("../controllers/user.controller");

const router = express.Router();

router.get('/', UserController.findAll),

router.get('/:id', UserController.findById),

module.exports = router;

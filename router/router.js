const express = require("express");

const router = express.Router();

const userRouter = require('./user.router')
const authRouter = require('./auth.router');
const imageRouter = require('./image.router');
const tagRouter = require('./tag.router');
const likeRouter = require('./like.router');
const commentRouter = require('./comment.router');
const { authentication } = require("../middleware/auth.middleware");


router.use('/auth', authRouter)
router.use(authentication)
router.use('/users', userRouter)

module.exports = router;
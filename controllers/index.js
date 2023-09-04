const router = require("express").Router();
const homeRoute = require("./home-routes");
const commentRoute = require("./api/comment-routes");
const userRoute = require("./api/user-routes");
const postRoute = require("./api/post-routes");

//routes

router.use("/", homeRoute);
router.use("/api/comments", commentRoute);
router.use("/api/users", userRoute);
router.use("/api/posts", postRoute);
module.exports = router;
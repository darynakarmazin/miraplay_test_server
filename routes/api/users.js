const express = require("express");
const router = express.Router();

const { users: ctrl } = require("../../controllers");
const { auth } = require("../../middlewares");

router.post("/register", ctrl.register);

router.post("/login", ctrl.login);

router.post("/logout", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.get("/current", auth, ctrl.getCurrent);

router.patch("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;

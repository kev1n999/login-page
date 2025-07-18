const { Router } = require("express");
const userRegister = require("../controllers/register.controller");
const userLogin = require("../controllers/auth.controller");

const router = Router();

router.post("/register", userRegister);
router.post("/login", userLogin);

module.exports = router;
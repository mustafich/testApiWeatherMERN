const router = require("express").Router();

const {
    userAuth,
    loginUser,
    checkRole,
    userRegister,
     serializeUser
} = require("../utils/Auth");


router.post("/register/user", async (req, res) => {
  await userRegister(req.body, "user", res);
});



router.post("/login/user", async (req, res) => {
  await loginUser(req.body, "user", res);

});




module.exports = router;

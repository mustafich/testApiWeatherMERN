const router = require("express").Router();
// Bring in the User Registration function
const {
    userAuth,
    loginUser,
    checkRole,
    userRegister,
     serializeUser
} = require("../utils/Auth");

// Users Registeration Route
router.post("/register/user", async (req, res) => {
  await userRegister(req.body, "user", res);
});


// Users Login Route
router.post("/login/user", async (req, res) => {
  await loginUser(req.body, "user", res);

});




module.exports = router;

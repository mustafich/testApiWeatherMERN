const router = require("express").Router();

const {
    userAuth,
    checkRole
} = require("../utils/Auth");
const {
    userFindWeather,
} = require("../req/user")

router.post(
    "/user/weather",
    userAuth,
    async (req, res) => {
        userFindWeather(req.body,"user",res)

    }
);


module.exports = router;

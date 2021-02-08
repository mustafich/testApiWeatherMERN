const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const {SECRET} = require("../config");

const userRegister = async (userDets, role, res) => {

    try {
        let loginNotRegisteredUser = await User.findOne({login: userDets.login})
        if (loginNotRegisteredUser) {
            return res.status(400).json({
                message: `Логин уже зарегистрирован.`,
                success: false
            });
        }

        const password = await bcrypt.hash(userDets.password, 12);

        if (role === "user") {
            const newUser = new User({
                ...userDets,
                password,
            });
            await newUser.save();
        }
        return res.status(201).json({
            message: "Вы успешно зарегистрированы.",
            success: true
        });
    } catch (err) {
    console.log(err)
        return res.status(500).json({
            message: "Невозможно создать аккаунт.",
            success: false
        });
    }
};


const loginUser = async (userCreds, role, res) => {
    let {login, password} = userCreds;
    const user = await User.findOne({login});
    if (!user) {
        return res.status(404).json({
            message: "Имя пользователя не найдено. Неверные логин или пароль",
            success: false
        });
    }

    if (user.role !== role) {
        return res.status(403).json({
            message: "Пожалуйста, убедитесь, что вы входите с правильного порта.",
            success: false
        });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {

        let token = jwt.sign(
            {
                user_id: user._id,
                role: user.role,
                login: user.login
            },
            SECRET,
            {expiresIn: "7 days"}
        );

        let result = {
            id:user.id,
            login: user.login,
            token: `Bearer ${token}`,
            expiresIn: 168,
        };

        return res.status(200).json({
            ...result,
            message: "Ура! Вы вошли в систему.",
            success: true
        });
    } else {
        return res.status(403).json({
            message: "Неверный пароль.",
            success: false
        });
    }
};


const validateUsername = async username => {
    let user = await User.findOne({username});
    return user ? false : true;
};


const userAuth = passport.authenticate("jwt", {session: false});


const checkRole = roles => (req, res, next) => {
debugger
    !roles.includes(req.user.role)
        ? res.status(401).json("UnauthorizedCheckRole")
        : next();
}


const serializeUser = user => {
    return {
        login: user.login,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt
    };
};

module.exports = {
    userAuth,
    checkRole,
    loginUser,
    userRegister,
    serializeUser
};

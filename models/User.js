const {Schema, model} = require("mongoose");

const UserSchema = new Schema(
    {
        login: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "user",
        },
        password: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
);

module.exports = model("users", UserSchema);

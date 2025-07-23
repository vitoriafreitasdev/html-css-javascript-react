const mongoose = require("mongoose")
const {serviceSchema} = require("./Services")
const { Schema } = mongoose

const userSchema = new Schema(
    {
        name:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
        budget: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        services: {
            type: [serviceSchema]
        }

    },
    {timestamps: true}
)

const User = mongoose.model("User", userSchema)

module.exports = {
    User,
    userSchema
}
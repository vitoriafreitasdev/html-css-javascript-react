

const mongoose = require("mongoose")

const {Schema} = mongoose

const commentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    }
)

const recipeSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        ingredients: {
            type: String,
            required: true,
        },
        preparation: {
            type: String,
            required: true,
        },
        preparationTime: {
            type: String,
            required: true,
        },
        src: {
            type: String,
            required: true,
        },
        likes: {
          type: Number,
          required: true,
          default: 0
        },
        comments: [commentSchema],
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
)
const Recipes = mongoose.model("Recipes", recipeSchema)
module.exports = {
    Recipes,
    recipeSchema
}
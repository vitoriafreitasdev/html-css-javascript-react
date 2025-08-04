
const {User} = require("../models/User")
const {Recipes} = require("../models/Recipes")
const fs = require("fs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()
const secret = process.env.SECRET

const removeOldImage = (image) => {
    fs.unlink(`public/${image.src}`, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Imagem deletada do servidor.")
        }
    })
}

const siteController = {
    register: async (req, res) => {
        try {
            const {name, email, password, confirmpassword} = req.body 

            const userExist = await User.findOne({email: email})

            const temEspaco = (str) => str.includes(" ")
            const emailVerfication = email.includes("@")
            const emailVerfication2 = email.includes(".")

            if(userExist) {
                return res.status(422).json({msg: "Esse email já existe utilize outro."})
            }
            if(password !== confirmpassword){
                return res.status(422).json({msg: "Senhas diferentes."})
            }
            const salt = await bcrypt.genSalt(12)
            const passwordCrypt = await bcrypt.hash(password, salt)

            if(email.length <= 254 && !temEspaco(email) && emailVerfication && emailVerfication2){
                const user = {
                    name: name,
                    email: email,
                    password: passwordCrypt,
                }

                const response = await User.create(user)

                res.status(201).json({response, msg: "Usuário criado com sucesso."})
            } else{
                res.status(422).json({msg: "Email não permitido."})
            }

        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")
        }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body

            const user = await User.findOne({email: email})
            if(!user){
                return res.status(404).json({msg: "Usuário não encontrado."})
            }

            const checkPassword = bcrypt.compare(password, user.password)

            if(!checkPassword){
                return res.status(404).json({msg: "Senha inválida."})
            }

            const id = user._id

            const token = jwt.sign(
                {
                    id: id
                },
                secret
            )
            res.status(200).json({msg: "Autenticação realizada com sucesso.", token, id})
        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")
        }
    },
    getUser: async (req, res) => {
        const users = await User.find()

        if(!users){
            return res.status(404).json({msg: "Nada encontrado."})
        }
            res.status(200).json(users)

    },
    userRoute: async (req, res) => {
        try {
            const id = req.params.id 
            const user = await User.findById(id, "-password")

            if(!user){
                return res.status(404).json({msg: "Usuário não encontrado."})
            }

            res.status(200).json(user)
        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")
        }
    },
    addRecipes: async (req, res) => {
        try {
            
            const {title, ingredients, preparation, preparationTime} = req.body 
            const src = `images/${req.file.filename}`
            const userId = req.userId // vem do token

            if(!title, !ingredients, !preparation, !preparationTime){
                return res.status(400).json({msg: "Por favor, preencha todos campos."})
            }

            const recipes = {
                title: title,
                ingredients: ingredients,
                preparation: preparation,
                preparationTime: preparationTime,
                src: src,
                author: userId
            }

            const savedRecipe  = await Recipes.create(recipes)
            const user = await User.findByIdAndUpdate(userId, {$push: { recipes: savedRecipe._id}}, {new: true})
            res.status(200).json({msg: "Adiocionado com sucesso.", recipe: savedRecipe, user})
        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")
        }
    },
    getRecipes: async (req, res) => {
        try {
            const recipes = await Recipes.find()

            if(!recipes){
                res.status(404).json({msg: "Receitas não encontradas"})
            }

            res.json(recipes)
        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")

        }
    },
    getRecipe: async (req, res) => {
        try {
            const id = req.params.id 

            const recipe = await Recipes.findById(id)

            if(!recipe){
                res.status(404).json({msg: "Receita não encontradas"})
            }


            res.json(recipe)
        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")
        }
    },
    deleteRecipe: async (req, res) => {
        try {
            const recipeId = req.params.id 
            const userId = req.userId
            
            // Verifica se a receita pertence ao usuário
            const recipe = await Recipes.findOne({ _id: recipeId, author: userId })
            if(!recipe){
                return res.status(404).json({msg: "Receita não encontrada ou não autorizada."})
            }
            const deleted = await Recipes.findByIdAndDelete(recipeId)
            // Remove a referência no usuário
            await User.findByIdAndUpdate(
            userId,
            { $pull: { recipes: recipeId } }
        )
            removeOldImage(deleted)

            res.status(200).json({msg: "Deletado com sucesso.", deleted})
        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")
        }
    },
    uptadeRecipe: async (req, res) => {
        try {
            const recipeId = req.params.id 
            const userId = req.userId
            const {title, ingredients, preparation, preparationTime} = req.body 
            // Verifica se a receita pertence ao usuário
            const recipe = await Recipes.findOne({ _id: recipeId, author: userId })
            if(!recipe){
                return res.status(404).json({msg: "Receita não encontrada ou não autorizada."})
            }
            let src = null 
  
            if(req.file) {
                src = `images/${req.file.filename}`
            }

            if(src) {
                removeOldImage(recipe)
            }

            const updateData =  {}

            if (title) updateData.title = title
            if (ingredients) updateData.ingredients = ingredients
            if (preparation) updateData.preparation = preparation
            if (preparationTime) updateData.preparationTime = preparationTime
            if (src) updateData.src = src

            const uptadeRecipe = await Recipes.findByIdAndUpdate(recipeId, updateData, {new: true})

            res.status(200).json({msg: "Atualizado com sucesso.", uptadeRecipe})

        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")
        }
    },
    addLike: async (req, res) => {
        try {
            const id = req.params.id 

            const recipe = await Recipes.findByIdAndUpdate(
                id,               // ID do documento
                { $inc: { likes: 1 } },  // Incrementa likes em +1
                { new: true }     // Retorna o documento atualizado
            );


            res.status(200).json({msg: "Atualizado com sucesso.", recipe})
        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")
        }
    },
    addComents: async (req, res) => {
        try {
            const id = req.params.id 
            
            const {name, text} = req.body 

            if (!name || !text){
                return res.status(400).json({msg: "Por favor, preencha todos os campos"})
            }

            const comment = {name, text}

            const recipe = await Recipes.findById(id)

            if(!recipe){
                return res.status(404).json({msg: "Receita não encotrada."})
            }

            recipe.comments.push(comment)

            await recipe.save()

            res.json({msg: "Comentário adicionado.", recipe})
        } catch (error) {
            console.log(error)
            res.status(500).send("Ocorreu um erro!")
        }
    },
    
    
}

module.exports = siteController



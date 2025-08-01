
const {User: UserModel} = require("../models/User.js")

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require("dotenv").config(); 
const secret = process.env.SECRET




const userController = {    

    register: async (req, res) => {
        
        try {
            const { name, email, password, confirmpassword, budget, image  } = req.body;

            const userExist = await UserModel.findOne({email: email})


            const emailVerificacao = email.includes("@")
            const emailVerificacao2 = email.includes(".")

            if(userExist){
               return res.status(422).json({msg: "Utilize outro e-mail, esse já existe!"})
            }
            if(password !== confirmpassword){
               return res.status(422).json({msg: "Senhas diferentes!"})
            }
            const salt = await bcrypt.genSalt(12)
            const passwordCrypt = await bcrypt.hash(password, salt)


            if(emailVerificacao && emailVerificacao2){
                const user = {
                    name: name,
                    email: email,
                    password: passwordCrypt,
                    budget: budget,
                    image: image,
                }
                const response = await UserModel.create(user)
                res.status(201).json({response, msg: "Usuário criado com sucesso!"})
            } else {
                return res.status(422).json({msg: "Email não permitido!"})
            }
        } catch (error) {
            console.log(error)
        }
    },
    login: async (req, res) => {
        const {email, password} = req.body

        const user = await UserModel.findOne({email: email})
        if(!user) {
            return res.status(404).json({msg: "Usuário não encontrado!"})
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
            return res.status(422).json({ msg: "Senha inválida!" });
        }

        try {
            const id = user._id
            const token = jwt.sign(
                {
                    id: user._id,
                },
                secret
            )

            res.status(200).json({msg: 'Autenticação realizada com sucesso', token, id})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: 'Aconteceu algum erro tente novamente mais tarde!'})
        }
    },

    userRoute: async(req, res) => {
        const id = req.params.id 

        const user = await UserModel.findById(id, '-password')

        if(!user) {
            return res.status(404).json({msg: "Usuário não encontrado"})
        }

        res.status(200).json({user})
    },

    addServices: async(req, res) => {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(
        id,
        { services: req.body.services },
        { new: true } // ← Isso faz retornar o usuário ATUALIZADO
        );
        if(!user) {
            return res.status(404).json({msg: "Usuário não encontrado"})
        }
        res.status(200).json({msg: "Adicionado com sucesso!", user})
    },
    
    deleteUserService: async(req, res) => {
        try {
            const {serviceId} = req.body
            const userId = req.params.id

            const userFind = await UserModel.findById(userId)
            if(!userFind){
                res.status(404).json({msg: "Usuario não encontrado"})
            }
            const servicesUptade = userFind.services.filter((s) => s._id.toString() !== serviceId)
            
            const user = await UserModel.findByIdAndUpdate(
            userId,
            { services: servicesUptade },
            { new: true } // ← Isso faz retornar o usuário ATUALIZADO
            );

            res.status(200).json({msg: "Deletado com sucesso!", user})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = userController
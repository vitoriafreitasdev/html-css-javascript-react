const {User: UserModel} = require("../models/User.js")
const bcrypt = require('bcrypt')
const userController = {
    register: async (req, res) => {
        
        try {
            const { name, email, password, confirmpassword  } = req.body;

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


            const user = {
                name: name,
                email: email,
                password: passwordCrypt,
            }

            const response = await UserModel.create(user)

            if(emailVerificacao && emailVerificacao2){
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

        const userExist = await UserModel.findOne({email: email})
        if(!userExist) {
            return res.status(404).json({msg: "Usuário não encontrado!"})
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
            return res.status(422).json({ msg: "Senha inválida!" });
        }

        // continuar o login e fazer as verificações

    }
}

module.exports = userController
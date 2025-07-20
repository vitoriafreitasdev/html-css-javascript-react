
/* imports */
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

// Config JSON response => para o node.js entender json
app.use(express.json())

// Models 
const User = require('./models/User')

// Open Route - Public Route
app.get("/", (req, res) => {
    res.status(200).json({msg: 'Bem vindo a nossa API!'})
})

// Private Route

app.get("/user/:id", checkToken, async (req, res) => {

    const id = req.params.id 

    // check if user exists
    const user = await User.findById(id, '-password') // para pegar pelo id e não pegar a senha do usuario

    if (!user) {
        return res.status(404).json({msg: 'Usuário não encontrado'})
    }

    res.status(200).json({user})
})

function checkToken(req, res, next) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1] // para pegar somente o token 

    if (!token) {
        return res.status(401).json({ msg: 'Acesso negado!'})
    }

    try {

        const secret = process.env.SECRET 

        jwt.verify(token, secret)

        next()
        
    } catch (error) {
        res.status(400).json({msg: "Token inválido!"})
    }
}

// Register User

app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmpassword  } = req.body;
    
  // validations
  if (!name) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  }
  if (!email) {
    return res.status(422).json({ msg: "O e-mail é obrigatório!" });
  }
  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }
  if (password !== confirmpassword) {
    return res.status(422).json({ msg: "As senhas não conferem!" });
  }

  // check if user exists

  const userExist = await User.findOne({email: email}) // procura se tem um usuário ja cadastrado com esse mesmo e-mail

  if(userExist){
    return res.status(422).json({ msg: "Utilize outro e-mail" });
  }
  
  // create password,usando criotografia
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  const user = new User({
    name, 
    email, 
    password: passwordHash
  })

  try {
    await user.save()

    res.status(201).json({msg: 'Usuário criado com sucesso!'})
  } catch(error) {
    console.log(error)
    res.status(500).json({msg: "Aconteceu um erro no servidor, tente novamente!"})
  }

});

// Login user

app.post("/auth/login", async (req, res) => {

    const {email, password} = req.body

    if (!email) {
        return res.status(422).json({ msg: "O e-mail é obrigatório!" });
    }
    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatória!" });
    }

    // check if user exists
    const user = await User.findOne({email: email}) // procura se tem um usuário ja cadastrado com esse mesmo e-mail

    if(!user){
        return res.status(404).json({ msg: "Usuário não encontrado!" });
    } 
    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword) {
        return res.status(422).json({ msg: "Senha inválida!" });
    }
    try {
        
        const secret = process.env.SECRET 

        const token = jwt.sign(
            {
                id: user._id,
            },
            secret,
        )

        res.status(200).json({msg: 'Autenticação realizada com sucesso', token})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!'
        })
    }
})

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS


mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ekr6roc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    app.listen(3000)
    console.log("Conectou ao banco")
}).catch((err) => console.log(err))


// passoword ubIAZdreOY4WEd5B

// usename vitoriafreitas110903

// 168.197.26.46/32

// mongodb+srv://vitoriafreitas110903:<db_password>@cluster0.ekr6roc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// npm install mongodb


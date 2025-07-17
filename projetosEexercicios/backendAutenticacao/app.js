
/* imports */
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

// Config JSON response => para o node.js entender json
app.use(express.json())


// Open Route - Public Route
app.get("/", (req, res) => {
    res.status(200).json({msg: 'Bem vindo a nossa API!'})
})

// Register User
// verificar porque nao ta conseguindo fazer o post
app.post('/auth/register', async(req, res) => {
    const {name} = req.body // , email, password, confirmpassword
    // validations

    if(!name) {
        return res.status(422).json({msg: "O nome é obrigatório!"})
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


import express from "express"
import admin from 'firebase-admin'
import { authenticateToken } from "./middleware/authenticate-jwt.js";
import { TransactionController } from "./transactions/controller.js";
import { transactionRouter } from "./transactions/routes.js";

const app = express()

admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json")
});

app.use('/transactions', transactionRouter)

app.listen(3000, () => console.log('API rest iniciada em http://localhost:3000'))



// REST API http://api.controle-de-gastos.com/transactions
//  https://console.firebase.google.com/project/controle-de-gastos-61567/authentication/providers?hl=pt-br
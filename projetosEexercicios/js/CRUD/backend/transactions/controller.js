
import { Transaction } from './model';
import admin from 'firebase-admin';

export class TransactionController {

    findByUser(request, response) {
        const transaction = new Transaction()
        transaction.user = request.user 

        transaction.findByUser().then(transaction => {
            response.json(transaction)
        }).catch(error => {
            response.status(error.code).json(error)
        })
    }

}

// testar pra ver se ta funcionando
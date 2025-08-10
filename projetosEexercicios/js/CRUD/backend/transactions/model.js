export class Transaction {
    date;
    description;
    money;
    TransactionType;
    type;
    user;

    findByUser(){
        if (!this.user?.uid){
            return Promise.reject({
                code: 500,
                message: "Usuário não informado."
            })
        }


        return admin.firestore()
            .collection('transactions')
            .where('user.uid', '==', this.user.uid)
            .orderBy('date', 'desc')
            .get()
            .then(snapshot => {
                return snapshot.docs.map(doc => ({
                    ...doc.data(),
                    uid: doc.id
                }))
            })
    }
}
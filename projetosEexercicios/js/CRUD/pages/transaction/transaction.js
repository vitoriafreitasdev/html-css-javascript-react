if(!isNewTransaction()){
    const uid = getTransactionUid()
    findTransactions(uid)
}

getTransactionUid()

function getTransactionUid(){
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('uid')
}

function isNewTransaction() {
    return getTransactionUid() ? false : true
}

function findTransactions(uid){
    showLoading()

    firebase.firestore()
    .collection("transactions") 
    .doc(uid)
    .get()
    .then(doc => {
        hideLoading()
        if(doc.exists){
            console.log(doc.data())
        } else {
            alert("Documento não encontrado")
            window.location.href = "../home/home.html"
        }
    })

}

function saveTransaction() {
    showLoading()
    const transaction = createTransation()
    firebase.firestore()
    .collection('transactions')
    .add(transaction)
    .then(() => {
        hideLoading()
        window.location.href = "../home/home.html"
    })
    .catch((error) => {
        hideLoading()
        console.log(error)
        alert('Erro ao salvar transação')
    })
}

function createTransation() {
    return  {
        type: form.typeExpense().checked ? "expense" : "income",
        date: form.date().value,
        money: {
            currency: form.currency().value,
            value: parseFloat(form.value().value)
        },
        transactionType: form.transactionType().value,
        description: form.description().value ,
        user: {
            uid: firebase.auth().currentUser.uid
        }
    }
}
function onChangeDate() {
    const date = form.date().value 
    form.dateRequiredError().style.display = !date ? "block" : "none"
    toggleSaveButtonDisable()
}

function onChangeValue(){
    const value = form.value().value;
    if(!value) {
        form.valueRequiredError().style.display = "block"
    }

    form.valueLessOrEqualToZeroError().style.display = value <= 0 ? "block" : "none"
    toggleSaveButtonDisable()
}

function onChangeTransactionType() {
    const transactionType = form.transactionType().value 
    form.transactionTypeRequiredError().style.display = !transactionType ? "block" : "none"
    toggleSaveButtonDisable()
}

function toggleSaveButtonDisable(){
    form.saveButton().disabled = !isFormValid()
}

function isFormValid(){
    const date = form.date().value 
    if(!date) {
        return false 
    }

    const value = form.value().value 
    if(!value || value <= 0){
        return false 
    }

    const transactionType = form.transactionType().value 
    if(!transactionType) {
        return false 
    }

    return true
}

const form = {
    currency: () => document.getElementById('currency'),
    date: () => document.getElementById('date'),
    description: () => document.getElementById('description'),
    dateRequiredError: () => document.getElementById('date-required-error'),
    value: () => document.getElementById('value'),
    valueRequiredError: () => document.getElementById('value-required-error'),
    valueLessOrEqualToZeroError: () => document.getElementById('value-less-or-equal-to-zero-error'),
    transactionType: () => document.getElementById('transaction-type'),
    transactionTypeRequiredError: () => document.getElementById('transaction-type-required-error'),
    typeExpense: () => document.getElementById('expense'),
    saveButton: () => document.getElementById("save-button")
}

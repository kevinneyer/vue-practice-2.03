let transactions = []

const getTransactions = () => {

    fetch('http://localhost:3000/transactions')
    .then( res => res.json())
    .then(data => {
        data.forEach(dat => {
            transactions.push(dat)
        }) 
    })
}

getTransactions()
console.log(transactions)


Vue.component('transaction-list', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['transaction'],
    template: '<li>{{ transaction.location }} - ${{ transaction.amount }}</li>'
})

let app = new Vue({
    el: '#app',
    data: {
        transactionList: transactions
    }
})
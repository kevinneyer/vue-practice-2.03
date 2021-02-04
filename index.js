let transactions = []

const getTransactions = () => {
    // let transactions = []
    fetch('http://localhost:3000/transactions')
    .then( res => res.json())
    .then(data => {
        data.forEach(dat => {
            transactions.push(dat)
        }) 
    })
}

Vue.component('transaction-list', {
    props: ['transaction'],
    template: `
        <table style="width: 100%">
        <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Remove</th>
        </tr>
        <tr>
            <td v-html='transaction.date'></td>
            <td v-html='transaction.location'></td>
            <td v-html='transaction.amount'></td>
        </tr>
        </table>
    `
})

let app = new Vue({
    el: '#app',
    // data: {
    //     transactionList: transactions
    // }
    mounted: function (){
        getTransactions()
    },
    data:{
        transactionList: transactions
    }
})
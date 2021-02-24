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
        <p> {{ transaction.date }} {{ transaction.location }} {{transaction.amount }} <button>Delete</button></p>
    `
})

Vue.component('counter', { 
    data: function() {
        return {
            count: 0
        }
    },
    template: `
    <div class='counter'>
        <span> {{ count }}</span>
        <button v-on:click='count += 1'>Add</button>
        <button v-on:click=' count -= 1'>Subtract</button>
    </div>
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
    },
    methods: {
        addTransaction: function() {
            fetch('http://localhost:3000/transactions', {
    
            })
        }
    }
})
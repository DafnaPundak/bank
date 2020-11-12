import React, { Component } from 'react';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';


class Transactions extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    deleteTransaction = (transactionToDelete) => {
        this.props.deleteTransaction(transactionToDelete)
    }

    render() {
        return (
            <div>
                <p>Transactions</p>
                <br></br>

                {this.props.items.map(t =>
                    <Transaction
                        key={t._id} id={t._id} amount={t.amount} vendor={t.vendor} category={t.category} deleteTransaction={this.deleteTransaction} />)}
                
                <br></br>
                <Link to="/">Home Page</Link>
                <br></br>
                <Link to="/breakdown">Breakdown</Link>
                <br></br>
                <Link to="/operations">Operations</Link>
            </div>
        )
    }
}

export default Transactions;

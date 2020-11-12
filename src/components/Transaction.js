import React, { Component } from 'react';
import '../App.css';

class Transaction extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    deleteTransaction = async () => {
        // console.log(this.props)
        let transactionToDelete = this.props
        this.props.deleteTransaction(transactionToDelete)
    }

    render() {
        return (
            <div id="transaction">
                <p>Vendor: {this.props.vendor}, Amount: {this.props.amount}</p>
                {/* <p>Category: {this.props.category}</p> */}
                <button onClick={this.deleteTransaction}>delete</button>
            </div>
        )
    }
}

export default Transaction;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }
    }

    handleInput = (e) => {
        const target = e.target
        const inputValue = e.target.value
        const name = target.name
        this.setState({ [name]: inputValue })
    }

    pushPosTransaction = () => {
        let newTransaction = this.state
        this.props.pushPosTransaction(newTransaction)
    }

    pushNegTransaction = () => {
        let newTransaction = this.state
        this.props.pushNegTransaction(newTransaction)
    }

    render() {
        return (
            <div>

                <div id="inputs">
                    <input name="amount" type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleInput}></input>
                    <input name="vendor" type="text" placeholder="Vendor" value={this.state.vendor} onChange={this.handleInput}></input>
                    <input name="category" type="text" placeholder="Category" value={this.state.category} onChange={this.handleInput}></input>
                </div>
                
                <div id="buttons">
                    <Link to="/transactions">
                        <button onClick={this.pushPosTransaction}>Deposit</button>
                        <button onClick={this.pushNegTransaction}>Withdraw</button>
                    </Link>
                    <br></br>
                    <Link to="/">Home Page</Link>

                </div>
            </div>
        )
    }
}

export default Operations;
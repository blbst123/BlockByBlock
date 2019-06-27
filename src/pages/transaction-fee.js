import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProgressBar from "../components/progress-bar";
import Buttons from "../components/buttons";

export default class TransactionFee extends React.Component {
  constructor() {
    super();
    this.state = {
      selector: 50,
    }
  }

  handleChange (event) {
    console.log(event.target.value);
    this.setState({selector: event.target.value});
  }

  render() {
    return (
      <Layout>
        <SEO title="Transaction Fee" />
        <div>
          <div className="flex-line">
            <img src="https://blockbyblock.s3.us-east-2.amazonaws.com/checkmark_red.svg" alt="confirmation icon" />
            <h3>Uh oh, the block filled up with other transactions from the Mempool</h3>
          </div>
          <h1>Which Transactions are Processed First?</h1>
          <div className="transaction-fee__description">
            <h4>Order of Transactions</h4>
            <div className="flex-around">
              <div className="transaction-fee__block">
                <p>Block 1MB</p>
              </div>
              <div className="transaction-fee__text text-block">
                <p>Since each block can only store a limited number of transactions,
                  transactions will often have to wait in the Mempool until all
              previously submitted transactions have been processed.</p>
                <p>However, there is a small txn fee attached to each transaction.
                  All transactions that get submitted into the block pay this fee
                  to the miner that generated this block. If we raise the amount
                  we are willing to pay, you may be able to skip ahead to the front
              of the line.</p>
              </div>
            </div>
            <h4>Txn Fee Adjustment:</h4>
            <h4>0.0001065 BTC -> 0.0003029 BTC</h4>
          </div>
        </div>
        <ProgressBar location={4} pointerDes="Transaction Fee" />
        <Buttons nextPage="transaction-success" prevPage="mempool" />
      </Layout >
    )
  }
}

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProgressBar from "../components/progress-bar";
import Buttons from "../components/buttons";

const Mempool = () => (
  <Layout>
    <SEO title="Mempool" />
    <div className="Mempool">
      <div className="flex-line">
        <img src="https://blockbyblock.s3.us-east-2.amazonaws.com/checkmark_green.svg" alt="confirmation icon" />
        <h3>Secret Key confirmed! Your transaction has been sent to the Mempool</h3>
      </div>
      <h1>What is the Mempool?</h1>
      <div className="mempool-description">
        <div className="flex-column">
          <img src="https://blockbyblock.s3.us-east-2.amazonaws.com/mempool.svg" alt="mempool" />
          <div className="mempool-image_label flex-line">
            <img className="mempool-blocks" src="https://blockbyblock.s3.us-east-2.amazonaws.com/green_box.svg" alt="red box" />
            <p>Our transaction</p>
          </div>
          <div className="mempool-image_label flex-line">
            <img className="mempool-blocks" src="https://blockbyblock.s3.us-east-2.amazonaws.com/red_box.svg" alt="green box" />
            <p>Other transactions</p>
          </div>
        </div>
        <div className="mempool-text text-block">
          <p>The Mempool is the place where unprocessed transactions wait to
              be filled. Every interval (around 10 mins), the Bitcoin network picks
              a group of transactions from the Mempool and executes them all in
              a batch called a ‘block’. Since each block has a set size of 1MB, not
            all transactions can fit inside a single block.</p>
          <p>This can cause a buildup in the Mempool if too many transactions
            are being processed through-out the network.</p>
        </div>
      </div>
      <h4>Hey look! A new Bitcoin block is being generated!</h4>
      <h4>Let’s see if our transaction can get processed.</h4>
    </div>
    <ProgressBar location={3} pointerDes="Mempool" />
    <Buttons nextPage="transaction-fee" prevPage="private-key" />
  </Layout>
);

export default Mempool;

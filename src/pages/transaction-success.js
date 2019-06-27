import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProgressBar from "../components/progress-bar";
import Buttons from "../components/buttons";

const Success = () => (
  <Layout>
    <SEO title="Transaction Success" />
    <div className="ConfirmSecretKey">
      <div className="flex-line">
        <img src="https://blockbyblock.s3.us-east-2.amazonaws.com/checkmark_green.svg" alt="confirmation icon" />
        <h3>Congrats! It looks like your transaction has made it into the newest block</h3>
      </div>
      <div className="flex-line">
        <img className="btc-wallet" src="https://blockbyblock.s3.us-east-2.amazonaws.com/icons8-identity-theft-64.png" alt="wallet icon" />
        <h3>Here is your updated Bitcoin balance</h3>
      </div>
      <h3>17A16QmavnUfCW11DAApiJxp7ARnxN5pGX</h3>
      <h1 className="btc-amount">4.331361 BTC</h1>
      <h4>Here is the most recent block processed by the Bitcoin network.</h4>
      <h4>If you had processed a real transaction, it would show up as part of this block.</h4>
      <div className="bitcoin-block-container"></div>
    </div>
    <ProgressBar location={5} pointerDes="Transaction Success" />
    <Buttons nextPage="index" prevPage="transaction-fee" />
  </Layout>
);

export default Success;

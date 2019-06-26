import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProgressBar from "../components/progress-bar";
import Buttons from "../components/buttons";

const SecretKey = () => (
  <Layout>
    <SEO title="Transaction" />
    <div className="ConfirmSecretKey">
      <div className="flex-line">
        <img src="https://blockbyblock.s3.us-east-2.amazonaws.com/icons8-identity-theft-64.png" alt="wallet icon" />
        <h3>Here is your Bitcoin Wallet</h3>
      </div>
      <div className="flex-line">
        <p>Sending <span>4.32 BTC</span> to Morty</p>
        <img src="https://blockbyblock.s3.us-east-2.amazonaws.com/icons8-morty-smith-48.png" alt="morty icon" />
      </div>
      <p>Confirm your secret key below to confirm this transaction::</p>
      <input type="text" placeholder="Secret Key" />
      <p className="tip" id="topTip">Forgot the password? Go back one step to get the password again.</p>
      <p className="tip">Make sure you never lose your real Bitcoin Wallet secret key!</p>
    </div>
    <ProgressBar location={2} pointerDes="Confirm Secret Key" />
    <Buttons nextPage="mempool" prevPage="transaction" />
  </Layout>
);

export default SecretKey;

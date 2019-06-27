import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProgressBar from "../components/progress-bar";
import Buttons from "../components/buttons";

const TransactionPage = () => (
  <Layout>
    <SEO title="Transaction" />
    <div className="Transaction" >
      <div className="flex-line">
        <img className="btc-wallet" src="https://blockbyblock.s3.us-east-2.amazonaws.com/icons8-identity-theft-64.png" alt="wallet icon" />
        <h3>Here is your Bitcoin Wallet</h3>
      </div>
      <h3>17A16QmavnUfCW11DAApiJxp7ARnxN5pGX</h3>
      <h1 className="btc-amount">8.6514 BTC</h1>
      <div className="flex-line">
        <p>Enter an optional name for your account:</p>
        <input type="text" placeholder="anonymous" />
      </div>
      <p>The secret key (password) for this account is:</p>
      <p id="secret-key">L3GZMadyBfnDKEPt5jjgpv4Dq8qReAaPyeHeH9cgTmaTWwAXttXp</p>
      <div className="flex-line">
        <p>Enter the amount you want to send:</p>
        <input type="text" placeholder="anonymous" />
      </div>
      <p>Transfer Target</p>
      <div className="flex-line">
        <div className="recipient flex-line">
          <input type="checkbox" className="filled-in" />
          <img className="recipient-icon" src="https://blockbyblock.s3.us-east-2.amazonaws.com/icons8-old-person-48.png" alt="old man icon" />
        </div>
        <div className="recipient flex-line">
          <input type="checkbox" className="filled-in" />
          <img className="recipient-icon" src="https://blockbyblock.s3.us-east-2.amazonaws.com/icons8-person-female-48.png" alt="woman icon" />
        </div>
        <div className="recipient flex-line">
          <input type="checkbox" className="filled-in" />
          <img className="recipient-icon" src="https://blockbyblock.s3.us-east-2.amazonaws.com/icons8-morty-smith-48.png" alt="morty icon" />
        </div>
      </div>
    </div>
    <ProgressBar location={1} pointerDes="Transaction" />
    <Buttons nextPage="secret-key" prevPage="index"/>
  </Layout>
)

export default TransactionPage

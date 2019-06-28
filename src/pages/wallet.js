import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProgressBar from "../components/progress-bar";
import Buttons from "../components/buttons";

const TransactionPage = () => (
  <Layout>
    <SEO title="Wallet" />
    <div className="Wallet" >
      <div className="flex-line">
        <img className="btc-wallet" src="https://blockbyblock.s3.us-east-2.amazonaws.com/icons8-identity-theft-64.png" alt="wallet icon" />
        <h3>Here is your Bitcoin Wallet</h3>
      </div>
      <h1 className="btc-amount">8.6514 BTC</h1>
      <p>Each BTC Wallet is composed of a <strong>Public Key</strong> and <strong>Private Key</strong></p>
      <div className="key-description">
        <div className="flex-start" id="public-key-label"><h4>Public Key:</h4></div>
        <div className="flex-start" id="public-key"><p>17A16QmavnUfCW11DAApiJxp7ARnxN5pGX</p></div>
        <p id="public-key-text">The Public Key is your account number. It is made up of 26-35 characters
          made up of upper and lower case letters and numbers. Others can use it to
        send you BTC.</p>
        <div className="flex-start" id="private-key-label"><h4>Private Key:</h4></div>
        <div className="flex-start" id="private-key"><p>L3GZMadyBfnDKEPt5jjgpv4Dq8qReAaPyeHeH9cgTmaTWwAXttXp</p></div>
        <p id="private-key-text">The Private Key is your password. It is made up of 64 characters in the
        range 0-9 or A-F. You use it to confirm transactions.</p>
      </div>
      {/* <div className="flex-line">
        <p>Enter the amount you want to send:</p>
        <input type="text" />
      </div>
      <div className="recipient flex-line">
        <p>Transfer Target:</p>
        <img className="recipient-icon" src="https://blockbyblock.s3.us-east-2.amazonaws.com/icons8-morty-smith-48.png" alt="morty icon" />
      </div> */}
    </div>
    <ProgressBar location={1} pointerDes="Wallet" />
    <Buttons nextPage="private-key" prevPage="index" />
  </Layout>
)

export default TransactionPage

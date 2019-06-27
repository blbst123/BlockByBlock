import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProgressBar from "../components/progress-bar";
import Buttons from "../components/buttons";
import IntroImage from "../components/intro-image";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Intro">
      <h1>Walk through the Lifecycle of a Bitcoin Transaction</h1>
      <IntroImage img="intro-page.png" />
      <h2>See an example of a Bitcoin transaction from start to finish!</h2>
      <h2>Press begin to start up a demo transaction.</h2>
    </div>
    <ProgressBar location={0} pointerDes="Start"/>
    <Buttons nextPage="transaction"/>
  </Layout>
)

export default IndexPage

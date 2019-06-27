import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProgressBar from "../components/progress-bar";
import IntroImage from "../components/intro-image";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Intro flex-column">
      <h1>The Lifecycle of a Bitcoin Transaction</h1>
      <IntroImage />
      <h4>This quick interactive demo will show you the steps a Bitcoin
        transaction goes through after you press send.</h4>
      <Link to={`/transaction`} style={{ textDecoration: 'none' }}><h4 className="press-begin">Press Here to start >></h4></Link>
    </div>
    <ProgressBar location={0} pointerDes="Start" />
    {/* <Buttons nextPage="transaction"/> */}
  </Layout>
)

export default IndexPage

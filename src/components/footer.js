import React from "react"

import "./styles/footer.css"

const Footer = () => (
  <div className="Footer flex-line">
    <p id="created" className="footer-item">Created by Bill Lou</p>
    <a className="flex-line" href="https://github.com/blbst123" target="_blank" rel="noopener noreferrer"><img src="https://blockbyblock.s3.us-east-2.amazonaws.com/github_icon.png" className="icon-github footer-item" alt="github icon" /></a>
    <a className="flex-line" href="https://www.linkedin.com/in/bill-lou/" target="_blank" rel="noopener noreferrer"><img src="https://blockbyblock.s3.us-east-2.amazonaws.com/linkedin_icon.png" className="icon-linkedin footer-item" alt="linkedin icon" /></a>
  </div>
)

export default Footer

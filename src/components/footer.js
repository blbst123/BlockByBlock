import React from "react"

import "./styles/footer.css"

const Footer = () => (
  <div className="Footer">
    <p id="created" className="footer_item">Created by Bill Lou</p>
    <a href="https://github.com/blbst123" target="_blank" rel="noopener noreferrer"><img src="https://blockbyblock.s3.us-east-2.amazonaws.com/github_icon.png" className="icon_github footer_item" alt="github icon" /></a>
    <a href="https://www.linkedin.com/in/bill-lou/" target="_blank" rel="noopener noreferrer"><img src="https://blockbyblock.s3.us-east-2.amazonaws.com/linkedin_icon.png" className="icon_linkedin footer_item" alt="linkedin icon" /></a>
  </div>
)

export default Footer

import React from "react"
import { Link } from "gatsby"

import "./footer.scss"
// import "../styles/global.css"

const Footer = () => {
  return (
    <footer>
      <nav id="footer-nav" className="footer-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li><Link to="#portfolio">Portflio</Link></li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <p className="copyright">
        © {new Date().getFullYear()} {` `}
        <a href="https://tim-beckett.com">Tim Beckett</a>
      </p>
    </footer>
  )
}

export default Footer

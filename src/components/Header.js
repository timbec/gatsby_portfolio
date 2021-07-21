import React from "react"
import { Link } from "gatsby"

import Container from "components/Container"

const Header = () => {
  return (
    <header className="site-header">
      <div className="titleContainer">
        <h1 className="site-header__title">
          <Link to="/">Tim Beckett</Link>
        </h1>

        <h2 className="site-header__subtitle">Software Developer</h2>
      </div>
      {/* <nav>
        <ul>
          <Link to="/about">About</Link>
          <Link to="/about">Contact</Link>
          <Link to="/about">Blog</Link>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header

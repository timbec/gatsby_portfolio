import React from "react"
import { Link } from "gatsby"

import Nav from './NavBar';

import { rhythm, scale } from "../utils/typography"
// import "../styles/global.css"
console.log(rhythm)

const Layout = ({ location, title, subtitle, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div className="content-wrapper">
        <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <h3>{subtitle}</h3>
      </div>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `black`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        // marginLeft: `auto`,
        // marginRight: `auto`,
        // maxWidth: rhythm(24),
        // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <Nav />
      <main className="main">
        {children}
      </main>
      <footer>
        <nav id="footer-nav" className="nav">
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#portfolio">Portflio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout

import React from "react"
import { Link } from "gatsby"

import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

import { rhythm, scale } from "../utils/typography"
// import "../styles/global.css"

const Layout = ({ location, title, subtitle, children }) => {
  
  return (
    <div>
      <Header
      location = { location }
      title = { title } 
      subtitle = { subtitle }
      />
      <NavBar />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

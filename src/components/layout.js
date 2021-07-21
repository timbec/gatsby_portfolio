import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "assets/stylesheets/application.scss"

import Header from "components/Header"
import Sidebar from "components/Sidebar"
import Footer from "components/Footer"

const Layout = ({ children, pageName }) => {
  let className = ""

  if (pageName) {
    className = `${className} page-${pageName}`
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Tim Beckett Portfolio</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Sidebar />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

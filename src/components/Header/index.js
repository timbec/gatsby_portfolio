import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from "../../utils/typography"


const Header = ({ location, title, subtitle }) => {

    const rootPath = `${__PATH_PREFIX__}/`
    let header
  
    if (true) {
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
        <header>
            {header}
        </header>
    )
}

export default Header
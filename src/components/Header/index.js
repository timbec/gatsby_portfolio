import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"

const Header = ({ location, title, subtitle }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (true) {
    header = (
      <div className="content-wrapper">
        <h1 className="header__main--title">
          <Link className="header__main--title_link" to={`/`}>
            {title}
          </Link>
        </h1>
        <h2 className="header__main--subtitle">Developer Portfolio</h2>
      </div>
    )
  } else {
    header = (
      <div className="header__main--title_group">
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
        <h2>Developer Portfolio</h2>
      </div>
    )
  }

  return <header className="header__main">{header}</header>
}

export default Header

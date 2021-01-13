import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"

const Header = ({ location, title, subtitle }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (true) {
    header = (
      <div className="content-wrapper">
        <h1 className="header-main__title">
          <Link className="header-main__title-link" to={`/`}>
            {title}
          </Link>
        </h1>
        <h2 className="header-title">Developer Portfolio</h2>
      </div>
    )
  } else {
    header = (
      <div className="header-main__title_group">
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
        <h2>Developer Portfolio</h2>
      </div>
    )
  }

  return <header className="main-header">{header}</header>
}

export default Header

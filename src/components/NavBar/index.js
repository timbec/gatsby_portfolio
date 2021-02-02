/*
/**
 * 
 * Nav component that provides basic layout for all pages. 
 *
 */
import React from "react"
import { Fragment } from "react"
import { Link } from "gatsby"
import Hamburger from "./hamburger"

import { rhythm } from "../../utils/typography"

const NavBar = () => {

    const closeNav = () =>  {

        document.body.classList.remove('nav-open');
    }

    return (
        <Fragment>
            <Hamburger />
                <nav id="main-nav" className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link className="nav__item--link" 
                            to="/"
                            onClick={closeNav}
                            >Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__item--link" 
                            to="/#portfolio"
                            onClick={closeNav}
                            >Portfolio</Link>
                        </li>
                       
                        <li className="nav__item">
                            <Link className="nav__item--link" 
                            to="/about"
                            onClick={closeNav}
                            >About</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__item--link" 
                            to="/blog"
                            onClick={closeNav}
                            >Blog</Link>
                        </li>
                    </ul>
                </nav>
        </Fragment>
    )
}

export default NavBar;
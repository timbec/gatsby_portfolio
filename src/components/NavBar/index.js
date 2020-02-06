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

import "./nav.scss"

const Nav = () => {
    return (
        <Fragment>
            <Hamburger />
                <nav id="main-nav" className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link className="nav__item--link" 
                            to="/">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__item--link" 
                            to="#portfolio">Portflio</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__item--link" 
                            to="/about">About</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__item--link" 
                            to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
        </Fragment>
    )
}

export default Nav;
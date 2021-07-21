import React from "react"
import { bool } from "prop-types"
import { StyledBurgerMenu } from "./BurgerMenu.styled"

const BurgerMenu = ({ open, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledBurgerMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💸</span>
        Pricing
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">📩</span>
        Contact
      </a>
    </StyledBurgerMenu>
  )
}

BurgerMenu.propTypes = {
  open: bool.isRequired,
}

export default BurgerMenu

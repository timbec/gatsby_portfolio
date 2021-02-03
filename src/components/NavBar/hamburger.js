import React from "react"

const Hamburger = () => {

    const navToggle = () => {
        console.log('I am being toggled'); 
        document.body.classList.toggle('nav-open');
    }

    return (
        <button className="nav-toggle" aria-label="toggle navigation" onClick={navToggle}>
            <span className="hamburger"></span>
        </button>
    )
}

export default Hamburger
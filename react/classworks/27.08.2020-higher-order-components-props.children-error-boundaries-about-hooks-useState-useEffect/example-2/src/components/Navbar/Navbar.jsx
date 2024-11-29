import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-row">
                    {props.children}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
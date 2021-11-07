import React from 'react';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <ul>
                    <li>
                        <a href="">Bio</a>
                    </li>
                    <li>
                        <a href="">Work</a>
                    </li>
                    <li>
                        <a href="">Side Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
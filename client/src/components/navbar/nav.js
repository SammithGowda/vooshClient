import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./nav.css"
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                </Link>
                <div className="navbar-right">
                    <button onClick={() =>navigate('/')} className="logout-btn">Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

const Header = () => {
    return (
        <div className="header">
            <div className="link">        
                <Link to="/">Home</Link>
                <Link to="/history">History</Link>
                <Link to="/payloads">Payloads</Link>
            </div>
        </div>
    )
}

export default Header;
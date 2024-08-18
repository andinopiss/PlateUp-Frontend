// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.jpg" alt="ProVital Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#">List your practice</a></li>
                    <li><a href="#">For Employers</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Speakers</a></li>
                    <li><a href="#">Doctors</a></li>
                    <li><a href="#">Login / Signup</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

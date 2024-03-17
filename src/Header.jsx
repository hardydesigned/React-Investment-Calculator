import React from 'react';
import headerImage from './assets/investment-calculator-logo.png';
import InputCard from './InputCard';

function Header() {
    return (
        <>
            <header id="header">
                <img src={headerImage} alt="React Logo" />
                <h1>React Investment Calculator</h1>
            </header>

        </ >
    )
}

export default Header;
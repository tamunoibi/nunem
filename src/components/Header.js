import React from 'react'
import Container from './Container';

export default function Header() {
    return (
        <header className='header'>

       <Container>
            <nav>
                <input type="checkbox" id="nav-toggle" />
                <div className="logo">MINZ<strong>CODE</strong></div>
                <ul className="links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <label for="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav>
            <label for="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
       </Container>
        </header>
    )
}


import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

import logo from "../images/Logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";




const Navbar = () => {
    return (

        <div className='header'>
            <nav>

                <ul>
                    <img className='momo' src={logo} alt='' />
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Menu"> Our Menu</Link>
                    </li>
                    <li>
                        <Link to="/Services">Our Services</Link>
                    </li>
                    <li>
                        <Link to="/Allergy">Allergy Advice</Link>
                    </li>
                    <li className='social-media'>
                        <FaFacebook  />
                        <FaInstagram />
                        <FaYoutube />
                    </li>
                     <li>
                     <button className='click'>Contact Us</button>
                     </li>
                </ul>
            </nav>
        </div>


    );
};

export default Navbar;

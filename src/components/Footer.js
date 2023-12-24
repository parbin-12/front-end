import React from 'react'
import logo from '../images/Logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const items = ['About Us', 'Our Menu', 'Our Services', 'Allergy Advice']
    const legal=['Terms & Conditions','Privacy Policy','Support']
    return (
        <div>
            <div className='down-dis'>
                <img src={logo} alt='' />
                <p>Work with an allergist to identify specific allergens <br /> triggering your symptoms. Common allergens include <br />pollen, dust mites, pet dander, mold, certain foods, <br />and insect stings.
                    Avoid Allergens:
                    Once identified,<br /> try to minimize exposure to allergens.<br /> This might involve:
                    Using air purifiers.</p>
                <div className='momo-fot'>
                    <h1 className='po'>momos</h1>
                    <span className='jpt'>
                        {items.map((el) => (
                            <a className='el' key={Math.random()} href={el}>{el}</a>
                        ))}
                    </span>
                </div>
                <div className='legal'>
                    <h1 className='po'>Legals</h1>
                    <span className='legy'>
                        {legal.map((el) => (
                            <a className='el' key={Math.random()} href={el}>{el}</a>
                        ))}
                    </span>
                </div>
                <div className='follow'>
                    <h1 className='po'>Follows Us</h1>
                <FaFacebookF />
                <FaInstagram />
                <FaTiktok /><br/>
                <FaXTwitter />
                <FaYoutube />
                <FaLinkedin />

                </div>
            </div>
        </div>
    )
}

export default Footer

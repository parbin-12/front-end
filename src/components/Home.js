import React from 'react'
import Navbar from './Navbar'
import "./Home.css";
import momo from "../images/momo.png";
import ellipse from "../images/ellipse.png";
import thumbs from "../images/thumbs.png";
import buff from '../images/buff.png';
import samosa from '../images/samosa.png';
import chilli from '../images/chilli.png';
import glass from '../images/glass.png';
import quality from '../images/quality.png';
import party from '../images/party.png';
import service from '../images/service.png';
import Rectangle from '../images/Rectangle.png';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTiktokLine } from "react-icons/ri";
import Map from '../images/Map.png';
import "./Form.css";
import Footer from './Footer';
import './Footer.css';

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='para'>
                <h4>Restaurant</h4><br></br>
                <h1>The <span className='hash'>#One</span></h1>
                <h1>Momo <span className='rest'>Restaurant</span></h1>
                <p>More than <span className='more'>20+ varieties</span> of momo available for you</p>
                <button className='food'>Explore Food Menu</button>
                <img src={momo} alt='' className='photo-container'></img>
                <img src={ellipse} className='orange' alt=''></img>
            </div>
            <div className='About'>

                <h1 className='reason'>Why Customers Love Us</h1>
                <p className='why'>Work with an allergist to identify specific allergens triggering your symptoms. Common allergens include pollen, dust mites, pet dander, mold, certain foods, and insect stings. Avoid Allergens: Once identified, try to minimize exposure to allergens. This might involve: Using air purifiers. Keeping windows closed during high pollen seasons. Using allergen-proof bedding. Avoiding certain foods if you have food allergies. Maintain a Clean Environment: Regularly clean your living space to reduce allergen exposure. Vacuum carpets, dust surfaces, and keep the environment well-ventilated. Personal Care: Be mindful of personal care products, including cosmetics and lotions, to avoid potential allergens. Choose hypoallergenic options when possible. Medications: Over-the-counter antihistamines, decongestants, and nasal corticosteroids can help manage allergy symptoms. Consult a healthcare professional before starting any medication. Emergency Plan: If you have severe allergies, consider having an emergency plan in place. This may involve carrying an epinephrine auto-injector for severe allergic reactions (anaphylaxis). Allergy Testing: Undergo allergy testing, such as skin tests or blood tests, to identify specific allergens accurately.</p>
                <img src={thumbs} className='done' alt=""></img>
                <button className='down'>Explore Our Story</button>
            </div>
            <div className='popular'>
                <h1 className='recip'>Our <span className='color'>Most Popular</span> Recipes</h1>
                <div className='buton-box'>
                    <button className='one'>Buff</button>
                    <button className='two'>Chicken</button>
                    <button className='three'>Veg</button>
                </div>
                <div className='menu'>
                    <div>
                        <img src={buff} alt='' className='buff' />
                        <h1>Rs.<span className='color'>180</span></h1>
                    </div>
                    <div>
                        <img src={samosa} alt='' className='samosa' />
                        <h1>Rs.<span className='color'>100</span></h1>
                    </div>
                    <div>
                        <img src={chilli} alt='' className='chilli' />
                        <h1>Rs.<span className='color'>130</span></h1>
                    </div>
                </div>
                <button className='menu-btn'>Explore Our Menu</button>
                <div className='video'>
                    <img src={glass} alt=''></img>
                    <div className='process'>
                        <h1 className='color'>Process behind the making</h1>
                        <p className='love'>See how only chefs cooks the best momos</p>
                    </div>
                    <button className='watch'>Watch Video</button>
                </div>
            </div>
            <div className='quality-food'>
                <div>
                    <img src={quality} alt='' ></img>
                </div>
                <div>
                    <img src={party} alt='' ></img>
                </div>
                <div>
                    <img src={service} alt='' ></img>
                </div>
            </div>
            <button className='expo'>Explore our services</button>
            <div className='happy'>
                <img src={Rectangle} alt=''></img>
            </div>
            <div className='plus'>
                <h1>200+ <span className='color'> Happy Customers</span></h1>
                <h3 className='go'>What our customers say about us</h3>
                <p className='comment'>It seems like your statement is a bit ambiguous, and I'm not sure if you're referring to "momo" as a type of food or something else. If you are talking about momo, the food, it is a type of dumpling native to Nepal and Tibet, but it's popular in many other parts of South Asia as well.</p>
                <h4>Diana col.</h4>
                <IoArrowBackCircleOutline className='left' />
                <IoArrowForwardCircleOutline className='right' />
            </div>
            <div className='sand'>
                <h1>Get <span className='color'>In Touch</span></h1>
                <h3 className='go'>Our friendly team would love to hear from you</h3>
                <div className='add'>
                    <h5 className='five'>Our Address</h5>
                    <h5>New, Baneshwor, Kathmandu, Nepal</h5>
                    <div className='contact'>
                        <h5>Our Contact</h5>
                        <li>
                            Mob:985623576
                        </li>
                        <li>
                            Landline:036466
                        </li>
                    </div>
                    <div className='time'>
                        <h5>Our Service Time</h5>
                        <li>Mon-Fri</li>
                        <p>8AM-PM</p>
                        <li>
                            SUN-SAT
                        </li>
                        <p>Closed</p>
                    </div>
                    <div className='media'>
                        <h4>Get in touch with social networks</h4>
                    </div>
                    <div className='d-media'>
                        <FaFacebook />
                        <IoLogoInstagram />
                        <RiTiktokLine />
                    </div>
                </div>

            </div>
            <span className='form'>
                    <div>
                        <form className='form-box'>
                            <label>First Name</label><br/>

                            <input type='text'/><br/>

                            <label>Last Name</label><br/>                          
                            <input type='text'/><br/>
                            <label>Email</label><br/>
                            <input type='email'/><br/>
                            <label>Phone no</label><br/>
                            <input type='text'/><br/>
                            <label>What can we do for you</label><br/>
                            <select name='service' id='choices'>
                                <option value="" placeholder='Choose'>momo</option>
                                <option value="" placeholder='Choose'>chicken</option>
                                <option value="" placeholder='Choose'>sizzler</option>
                                <option value="" placeholder='Choose'>knife</option>
                            </select><br/>
                            <button className='frm-btn'>Submit</button><br/>
                        </form>
                    </div>
                </span>
            <div className='map'>
                <img src={Map} alt="" ></img>
            </div>
           <div>
            <Footer />
           </div>
          
        </>
    )
}

export default Home;

import React from 'react'
import "./About.css"
import gr from '../img/gr.png'
import Navbar from './Navbar'
import pr from '../img/pr.png';
import spoon from '../img/spoon.png';
import pl from '../img/pl.png';
import girl from '../img/girl.png';
import mo from '../img/mo.png';
import gl from '../img/gl.png';
import mu from '../img/mu.png';
import lady from '../img/lady.png';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import cap from '../img/cap.png';
import sa from '../img/sa.png';
import fire from '../img/fire.png';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className='pop'>About Us</h1>
      </div>
      <div>
        <p className='abt-pr'>we pride ourself on</p><br />
        <p className='abt'><span className='color'>our authentic momo receipe</span><br /> passed down  through <br></br>generations </p>
      </div>
      <div className='gr'>
        <img src={gr} alt='' />
      </div>
      <div className='pr'>
        <img src={pr} alt='' />
        <div className='watch1'>
          <p>Process behind the making</p><br />
          <p>see how we make momos that you like from the best ingredients</p>
          <button className='btn'>Watch the video</button>
        </div>
      </div>

      <div className='container'>
        <div className='item1'>
          <h2>Our momos are<span className='color'> made<br /> with love</span></h2>
          <p className='grey'>Work with an allergist to identify specific allergens triggering your symptoms. Common allergens include pollen, dust mites, pet dander, mold, certain foods, and insect stings. Avoid Allergens: Once identified, try to minimize exposure to allergens. This might involve: Using air purifiers. Keeping windows closed during high pollen seasons. Using allergen-proof bedding. Avoiding certain foods if you have food allergies. Maintain a Clean Environment</p>
        </div>
        <div className='item2'>
          <img src={spoon} alt='' className='spoon' />
        </div>
      </div>
      <div className='pl'>
        <img src={pl} alt='' />
      </div>
      <div className='taste'>
        <div className='item3'>
          <img src={girl} alt='' className='girl' />
        </div>
        <div className='item4'>
          <h2>Taste the difference with<br /><span className='color'>our handcrafteed momos</span></h2>
          <p className='grey'> Regularly clean your living space to reduce allergen exposure. Vacuum carpets, dust surfaces, and keep the environment well-ventilated. Personal Care: Be mindful of personal care products, including cosmetics and lotions, to avoid potential allergens. Choose hypoallergenic options when possible. Medications: Over-the-counter antihistamines, decongestants, and nasal corticosteroids can help manage allergy symptoms. </p>
        </div>
      </div>
      <div className='mo'>
        <img src={mo} alt='' />
      </div>
      <div className='blend'>
        <div className='item5'>
          <h2>our momos are the<br />perfect<span className='color'> blend of tradition</span><br />and<span className='color'> innovation</span></h2>
          <p className='grey'>Regularly clean your living space to reduce allergen exposure. Vacuum carpets, dust surfaces, and keep the environment well-ventilated. Personal Care: Be mindful of personal care products, including cosmetics and lotions, to avoid potential allergens. Choose hypoallergenic options when possible. Medications: Over-the-counter antihistamines, decongestants, and nasal corticosteroids can help manage allergy symptoms.</p>
        </div>
        <div className='item6'>
          <img src={gl} alt='' />
        </div>
      </div>
      <div className='mu'>
        <img src={mu} alt='' />
      </div>
      <div className='ceo'>
        <div className='item7'>
          <p className='white'>Regularly clean your living space to reduce allergen exposure. Vacuum carpets, dust surfaces, and keep the environment well-ventilated. Personal Care:</p><br />
          <h1 className='white'>Marcus David</h1>
          <h4 className='white'>CEO</h4>
        </div>
        <div className='item8'></div>
        <img src={lady} alt='' />
      </div>
      <div className='ar'>
        <FaCircleArrowLeft className='r' />
        <FaCircleArrowRight className='l' />
      </div>
      <div className='team'>
        <div className='meet'>
          <h1>Meet the <span className='color'>Team</span></h1>
          <p className='tl'>our talented team members who delivers only the best result </p>
        </div>
        <div className='mem'>
          <div className='item9'>
            <img src={cap} alt='' className='cap' />
          </div>
          <div className='item10'>
            <img src={sa} alt='' className='sa' />
          </div>
          <div className='item11'>
            <img src={fire} alt='' className='fire' />
          </div>
        </div>
      </div>
      <div className='ar'>
        <FaCircleArrowLeft className='r' />
        <FaCircleArrowRight className='l' />
      </div>
      <div className='fo'>
        <Footer />
      </div>
    </>
  )
}

export default About
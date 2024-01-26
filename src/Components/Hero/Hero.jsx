import React from 'react';
import './Hero.css'
import hand_icon from '../Assets/logo.png';
import arrow_right from '../Assets/logo.png';
import hero_img from '../Assets/logo.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className='hero-hand'>
                <p>new</p>
                <img src={hand_icon} alt="Hi!" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className='hero-latest-btn'>
                <div>Latest Collections</div>
                <img src={arrow_right} width={22} alt="latest items" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} width={400} alt="hero" />
        </div>
    </div>
  )
}

export default Hero
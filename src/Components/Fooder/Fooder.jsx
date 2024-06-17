import React from 'react';
import "./Fooder.css"
import { assets } from '../../assets/assets';

const Fooder = () => {
  return (
    <div className='fooder' id='fooder'>
       <div className="fooder-content">
        <div className="fooder-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime officia repellat corporis cumque tenetur at incidunt, harum impedit nisi illo porro aut adipisci rem eius modi veniam quam asperiores.</p>
            <div className="fooder-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="fooder-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="fooder-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9943697703</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
       </div>
       <hr />
       <p className='fooder-copyright'>Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  );
}

export default Fooder;

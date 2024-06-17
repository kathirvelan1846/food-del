import React, { useState } from 'react';
import "./Loginpopup.css"
import { assets } from '../../assets/assets';

const Loginpopup = ({setShowLogin}) => {
    const [currState,setCurrState] =  useState("Login");
  return (
    <div className='loginpopup'>
      <form className="loginpop-container">
        <div className="loginpopup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginpopup-input">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
             <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign up"?"Create account":"Login"}</button>
        <div className="logpopup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>}
       
         
      </form>
    </div>
  );
}

export default Loginpopup;

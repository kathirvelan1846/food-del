import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
       <div className="header-contents">
        <h2>Order your favorite food here...</h2>
        <p>Food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer. </p>
        <button>View Menu</button>
       </div>
    </div>
  );
}

export default Header;

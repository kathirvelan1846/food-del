 import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from "../src/Pages/Home/Home.jsx"
import Cart from "../src/Pages/cart/Cart.jsx";
import Placeorder from "../src/Pages/Placeorder/Placeorder.jsx"
import Fooder from './Components/Fooder/Fooder.jsx';
import { useState } from 'react';
import Loginpopup from './Components/Loginpopup/Loginpopup.jsx';
 

const App = () => {

    const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className="App">
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
        <Route path='/' element={<Home/>} />        
        <Route path='/cart' element={<Cart/>} />      
        <Route path='/placeorder' element={<Placeorder/>} />
        </Routes>
    </div>
    <Fooder/>
    </>
    
  );
}

export default App;

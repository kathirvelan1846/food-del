import React, { useState } from 'react';
import "./Home.css"
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/Exploremenu/ExploreMenu';
import Fooddisplay from '../../Components/Fooddisplay/Fooddisplay';
import Appdownload from '../../Components/Appdownload/Appdownload';

const Home = () => {
  const [category,setcategory] = useState("All");
  return (
    <div>
       <Header/>
       <ExploreMenu category={category} setcategory={setcategory}/>
       <Fooddisplay category={category}/>
       <Appdownload/>
    </div>
  );
}

export default Home;

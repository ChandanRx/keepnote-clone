import React from "react";
import img from './images/pngegg.png'

import "./index.css";

const Header = () => {
  return (
    <>
      <div className='header'>
      <img src={img} alt='logo' width='120' height='80'/>
        <h1><span style={{color : 'darkblue'}}>Rx</span>Keep</h1>
        
      </div>
    </>
  );
  
};

export default Header;
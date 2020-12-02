import React from 'react';
import '../css/header.css';
import img from '../img/argentina.png';

const Header = ()=>{
 return(
   <React.Fragment>
   <header className="header-oficial">
      <div className="nav-header">
      <h1>Vegetariano Gourmet</h1>
      <img className="img-flag" src={img} />
      </div>
   </header>
   </React.Fragment>
 )
}

export default Header;

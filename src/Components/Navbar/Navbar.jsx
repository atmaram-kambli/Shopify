import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <Link to='/'>
            <div className="nav-logo">
                <img src={logo} width={50} alt="Shopify" />
                <p>SHOPIFY</p>
            </div>
        </Link>
        <ul className="nav-menu">
            <Link to="/"><li onClick={()=>{setMenu("shop")}}>Shop  {menu === "shop"?<hr/>:<></>}</li></Link>
            <Link to="/men"><li onClick={()=>{setMenu("men")}}>Men  {menu === "men"?<hr/>:<></>}</li> </Link>
            <Link to="/women"><li onClick={()=>{setMenu("women")}}>Women  {menu === "women"?<hr/>:<></>}</li></Link>
            <Link to="/kids"><li onClick={()=>{setMenu("kids")}}>Kids  {menu === "kids"?<hr/>:<></>}</li></Link>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Log in</button></Link> 
            <Link to="/cart"><img src={logo} width={40} alt="Brouse your carts" /></Link> 
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
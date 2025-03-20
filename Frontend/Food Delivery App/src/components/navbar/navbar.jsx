import React, { useState } from "react";
import "./navbar.css";
import { asserts } from "../../assets/asset";
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";

const navbar = () => {
  const [tab,setTeb] = useState('home');

  function currentTab(clickedTab){
    setTeb(clickedTab);
  }
  return (
    <div>
      <div className="navbar-div">
        <div className="L-nav-div" >
          <img src={asserts.tomato_png} alt="alt_logo" />
          <h3>Tomato.</h3>
        </div>

        <ul className="text-ul">
          <li className={tab == "home" ? "active":""} onClick={()=>{currentTab("home")}}>Home</li>
          <li className={tab == "menu" ? "active" : "" } onClick={()=>{currentTab("menu")}} >Menu</li>
          <li className={tab == "mobile-app" ? "active" : "" } onClick={()=>{currentTab("mobile-app")}} >Mobile-App</li>
          <li className={tab == "contact us" ? "active" : "" } onClick={()=>{currentTab("contact us")}} >Contact Us</li>
        </ul>

        <div className="R-nav-div">
          <div>
            <FaSearch size="1.7em" />
          </div>
          <div className="cart-div" >
            <HiShoppingCart size="2em" />
            <div className="dot"></div>
          </div>
          <button>sign up</button>
        </div>
      </div>
    </div>
  );
};

export default navbar;

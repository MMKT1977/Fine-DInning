import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "./logo.JPG";
import "./Navbar.css";

function NavBar(){
    return(
            <nav id="navbar">
                {/* <div className="logo">
                    <img src={logo} alt="logo" className="logo"/>
                </div> */}
                <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/foodList'><li>FoodList</li></NavLink>
                <NavLink to='/reviews'><li>Reviews</li></NavLink>
                <NavLink to='/contacts'><li>Contacts</li></NavLink>
                </ul>
            </nav>
    )
  }
  export default NavBar;
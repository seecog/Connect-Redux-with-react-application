import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = ()=>{
   /* return (
        <div>
<a href="/contact">Contact Us</a> | 
<a href="/about">About Us</a> | 
<a href="/">Home </a> | 
        </div>
    )*/

return (
    <div>
<NavLink to="/">Home</NavLink> | 
<NavLink to="/contact">Contact Us</NavLink> | 
<NavLink to="/about">About us</NavLink>
    </div>
)


}

export default Navigation;
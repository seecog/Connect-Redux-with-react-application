import React from 'react';
import {NavLink} from 'react-router-dom';
const Companynav = ()=>{
return (
    <div>
<NavLink to="/">Employee List</NavLink> | 
<NavLink to="/add">Add Employee</NavLink> | 
    </div>
)
}

export default Companynav;
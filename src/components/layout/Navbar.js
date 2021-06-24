import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export const Navbar = () => {
    return (
       
<nav>
<div className="nav-wrapper">
  <Link to="/" className="brand-logo">ECG Arrhythmia Classifier</Link>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><NavLink to="/Project">Project</NavLink></li>
    <li><NavLink to="/AboutArrhythmia">Arrhythmia</NavLink></li>
    <li><NavLink to="/Prediction">Predict</NavLink></li>
    <li><NavLink to="/Teamdetails">About Us</NavLink></li>
  </ul>
</div>
</nav>
    )
}

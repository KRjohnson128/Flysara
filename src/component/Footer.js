import React from 'react'
import Logo from './Asset/pegion_logo.png.jpeg';
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
         <div className='footer-grid'>
          <h5>About</h5>
          <ul>
            <li>About Fly Sara</li>
            <li>News</li>
            <li>Information</li>
            <li>Careers</li>
            <li>Site Map</li>
          </ul>
         </div>

         <div className='footer-grid'>
          <h5>Support</h5>
          <ul>
          <li>Contact</li>
            <li>Frequently Ask Question</li>
            <li>Care</li>
            <li>Complaints</li>
            <li>Help</li>
          </ul>
         </div>

         <div className='footer-grid'>
          <h5>Book&Manage</h5>
          <ul>
          <li>Search Flight</li>
            <li>Manage Booking</li>
            <li>Flight Schedule</li>
            <li>Cargo</li>
            <li>Connecting Flights</li>
          </ul>
         </div>

         <div className='footer-grid'>
          <h5>Prepare To Travel</h5>
          <ul>
          <li>Gaggage Guidline</li>
            <li>Airport Information</li>
            <li>Hotels</li>
            <li>Tour Planner</li>
            <li>Health</li>
          </ul>
         </div>

        </div>
        <div className='footer-end'>
         <img  className="footer-img" src={Logo} alt="Logo"></img>
         <div className='footer-flw'> 
            <h6>FOLLOW US ON</h6>
            <div className='footer-icons'>
              <div className='footer-icon'><FaLinkedin /></div>
              <div className='footer-icon'><FaYoutube /></div>
              <div className='footer-icon'><BsTwitterX /></div>
              <div className='footer-icon'><FaSquareInstagram /></div>
              <div className='footer-icon'><FaFacebookSquare /></div>
             </div>
           </div>
        </div>
        <div className='footer-copyright'>
          <p>
            <span>Copyright © 2024 FlySara Ltd. </span>
            <p>All rights reserved. Use of this website indicates your compliance with our Privacy Policy, Conditions of Carriage, Terms and Conditions.</p>
          </p>
        </div>
      
      
     
    </div>
    )
}

export default Footer

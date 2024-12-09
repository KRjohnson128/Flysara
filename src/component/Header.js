import React,{useState}from "react";
import { Link } from 'react-router-dom';
import Logo from './Asset/pegion_logo.png.jpeg';
import { BsGift } from "react-icons/bs";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import Search from "./Search";



function Header(){

   const [search,setSearch] = useState(false);

   //function to handle click
   const handleClick = () => {
      setSearch(true);
   }

   
return(
  
     <div className="header">
        <div className="navbar-one"> 
         <div className="logo">
            <img  className="Logo-img" src={Logo} alt="Logo"></img>
                <h4>FlySara</h4>
            </div>
        </div>  

        <div className="navbar-two">
          <div className="sub-navbar">

          <div className="gift"><BsGift /></div> 
            <button className="subnav-btn">
                <span className="subnav-text">Voucher </span> 
             </button>
              
             <div className="nav-dropdown">
                <div className="nav-icons">
                  <MdOutlineHeadsetMic />
                
                
               <button className="subnav-btn">
                <span className="subnav-text">Support</span>
                </button>
                <div className="dropdown-content">
                  <a href="#Contact Us"> Contact Us</a>
                  <a href="#FAQ"> FAQ</a>

                </div>
                </div> 
                </div>

                <div className="nav-icons">
                  <BsSearch />
                 </div>
                    <button  onClick={handleClick}
                      className="subnav-btn">
                     <span className="subnav-text">Seacrch</span>
                    </button>
                    

                 <div className="nav-icons">
                   <GoPerson />
                 </div>
                 <ul>
                  <Link to="Login">
                 <button className="subnav-btn">
                 <span className="subnav-text">Login</span>
                 </button>
                 </Link>
                 </ul>

                

             </div>


         <div className="search-main">
         <ul>
            <Link to="/">Home</Link>
            <Link to="lounge">Lounge</Link>
            <Link to="travelers">Travelers</Link>
            <Link to="info">Info </Link>
            <Link to="support">Support</Link>
            
        </ul>
         </div>
       </div>

       {search && <Search/>}
     </div>
   
   )
}
export default Header;
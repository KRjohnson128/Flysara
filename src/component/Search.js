import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

function Search() {
  
 
  return (
    <div className='search'>
      <div className='search-close'>
        <button className='close-btn'>
          <IoCloseSharp />
        </button>
      </div>
      <div className='search-header'>
         <h3>What are you looking for ?..</h3>
         <div className='seacrh-bar'>
           <input type='text' placeholder='Search for flights,Web check...,'/>
           <span className='search-icon'><FiSearch /> </span>
         </div>
       </div>
    </div>
  );
}

export default Search;

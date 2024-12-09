import React, { useState } from 'react';
import { BsFillAirplaneFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsFilterSquareFill } from "react-icons/bs";
import ReactDatePicker from './ReactDatePicker';
import FlightStatus from "./FlightStatus";
import CheckIn from './CheckIn';
function Home() {
    const [value,setValue] = useState('')
    const [showOptions, setShowOptions] = useState(false);
    const [message,setMessage] = useState('');
    //const [flightStatus,setFlightStatus] = useState(false);
    //const [checkIn,setCheckIn] = useState(false);
    
  
    const handleCheckin = () => {
      console.log('Handling Check-in');
      //alert('Check-in Process Started');
    };
    const handleFlightStatus = () => {
      console.log('Fetching Flight Status');
      //alert('Flight Status Displayed');
    };
    const handleBookingDetails = () => {
      console.log('Fetching Booking Details');
      //alert('Booking Details Displayed');
    };

    const handleClick = (action) => {
      switch (action) {
        
        case 'CheckIn':
          handleCheckin();
          break;
        case 'FlightStatus':
          handleFlightStatus();
          break;
        case 'BookingDetails':
          handleBookingDetails();
          break;
        default:
          setMessage('Invalid action')
          console.log('Invalid action');
      }
    };

  const options =[
    {label:"Mumbai", value: 1},
    {label:"USA", value:2},
    {label:"Chennai",value:3},
    {label:"Trivandrum", value:4},
    {label:"Bangalore", value:5}
  ]
  const handleSelect = (selectedOption) =>{
    setValue(selectedOption.label);
    setShowOptions(false);

  }
  

return (

   <div className="home">
      <div className="home-form">
        <div className='home-list'>
        <ul>
          <div className='home-items'>
            <span className='home-info'>

              <li>
              <button className='subnav-btn'>
                <div  className='home-icon'>
                 <BsFillAirplaneFill />
                 <span >Flights</span>
                </div>
                </button>
             </li>

             <li>
              <button onClick={()  => handleClick('CheckIn')}
               className='subnav-btn'>
               <div className='home-icon'>
                 <BsFillPersonCheckFill />
                 <span>Check-In</span>
               </div>
               </button>
             </li>

             <li>
             <button onClick={() => handleClick('FlightStatus')}
              className='subnav-btn'>
               <div className='home-icon'>
                 <BsFillClockFill />
                 <span>FlightStatus</span>
               </div>
               </button>
             </li>

             <li>
             <button onClick={() => handleClick('BookingDetails')}
             className='subnav-btn'>
               <div className='home-icon'>
                 <BsFilterSquareFill />
                 <span>Booking-Details</span>
               </div>
               </button>
             </li>
            </span>
         </div>
        </ul>
       
      </div>
        <div className='radio-group'>
          <input type="radio"/>
          <label>Round Trip</label>
           <input type="radio"/>
           <label>Oneway</label>
        </div>
        
       <form className='frm'>
         <label>From </label>
          <input
           type='text' 
           placeholder='Orgin'
           value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() =>setShowOptions(true)}
            />
           {showOptions && (
            <div>
              {options
              .filter(option => option.label.toLowerCase().includes(value.toLocaleLowerCase())
              ).map.apply(option =>(
                <div key={option.value}
                className='dropdown-option'
                onClick={() =>handleSelect(option)}
                >
                  {option.label}
                  </div>
              ))}
            </div>
           )}
           
          <label>To</label>
          <input type='text' placeholder='Destination'/>


          <label htmlFor='travel-date'>Travel Date</label>
          <ReactDatePicker/>
          
          <label>Passengers</label>
          <input type='Passengers' placeholder='Passengers'/>
          <button className='submit-btn'>Search</button>
           
        </form>
        {message} 
  </div>

     <div className='centered-div'>
     <div className='image-container'>
     <h1 className='home-content'>Let's plan your trip</h1>
     <p>There are key phrases you pass through when planning a trip. First, <br/>
     your wanderlust grows into a pang you can’t ignore.<br/>
     </p>
     </div>
     
     </div>
    
    
   </div>
  );
}

export default Home;

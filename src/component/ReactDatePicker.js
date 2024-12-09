import React, { useState } from 'react'

import DatePicker from "react-datepicker";

function ReactDatePicker() {

  const [selectedDate,setSelectedDate] = useState( null);

  const handleDateChange = (data) => {
    setSelectedDate(data)
  }
  return (
    <div>
      
    <DatePicker
      input type='text' 
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MM/DD/YYYY"
      placeholder='Travel Date'
      className='custom-input'
     />
    </div>
  )
}

export default ReactDatePicker;

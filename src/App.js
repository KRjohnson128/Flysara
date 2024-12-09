import React from "react";
import Header from "./component/Header";
import "./App.scss";
import Home from "./component/Home";
import RowPost from "./component/RowPost";
import Info from "./component/Info";
import Lounge from "./component/Lounge";

import Support from "./component/Support";
import Travelers from "./component/Travelers";
import Login from "./component/Login";

import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Tour from "./component/Tour";
import FlightStatus from "./component/FlightStatus";
import CheckIn from "./component/CheckIn";
import Search from "./component/Search";
import ReactDatePicker from "./component/ReactDatePicker";


 
 function App(){
 
  
   
 return(
      
 <BrowserRouter>
   <Routes>
      <Route path="Home" element={<Home/>}/>
      <Route path="Lounge" element={<Lounge/>}/>
      <Route path="Travelers" element={<Travelers/>}/>
      <Route path="Info" element={<Info/>}/>
      <Route path="Support" element={<Support/>}/>
      <Route path="Login" element={<Login/>}/>
   </Routes>
   
      <div>
       <Header/>
        <Home />
        <RowPost/>
        <Info/>
        <Tour/>
        <Support/>
        <Travelers/>
        <CheckIn/> 
        <Footer/> 
        </div>
        </BrowserRouter>
     
    
  )
}
  export default App;
  
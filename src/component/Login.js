import React from 'react';
import Logo from './Asset/pegion_logo.png.jpeg';


function Login() {


  return (
    <div className='login'>
      <header className='login-header'>
        <img  className="login-img" src={Logo}alt='logo'></img>
        <h1>Flysara</h1>
      </header>
   
   <div className='login-container'>
    <div className='login-form-1'>
    <div className='login-header'>
      <h1>Login</h1>
    </div>
   <form  className='login-frmx'>
     <label>
         <input type='value' placeholder='mobile'/><br/>
         </label> 
        <label>
         <input type='text' placeholder='passward'/>
         </label>
          <br/>
         <button className='login-btn'>LogIn</button>
   </form>
   <div className='login-end'>
   <h6>Have you truble?</h6>
   <h5>Contact Us</h5>
   </div>
   </div>
   
  <div className='signup-form'>
   <h3>All about your choice </h3>
   
    <p>“You are probably a thousand feet up there, but you always stay in my heart. Safe travels my love!”</p>
   
   <form  className='signup-frm'>
     
         <button className='signup-btn'>SignUp</button>
         </form>
        
   </div>

   
   </div>
      
      
    </div>
  );
}

export default Login;

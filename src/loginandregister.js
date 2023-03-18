import React from 'react';
import { Paper, IconButton } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

const onhandleSubmit = (e) => {
    e.preventDefault();

  };
  
const loginandregister = () => (
    <div className='form-box'>
        <div className='button-box'>
            <div id='btn'></div>
            <button type="button" class="toggle-btn" onclick={login()}>Login</button>
            <button type="button" class="toggle-btn" onclick={register()}>Register</button>
        </div>
        <div className='social-icons'></div>
        <Paper
              component='form'
              className='form'
              id='login'
              onSubmit={onhandleSubmit}
              sx={{
                borderRadius: 20,
                border: '1px solid #ccc',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 6 },
                height: '40px',
              }}
              >
                <input
                 className='email'
                 placeholder='Enter your Email Address'
               />
                <input
                 className='password'
                 placeholder='Enter your Password'
               />
               <span>Remember Password</span><input type={CheckBox} className='checkbox'/>
               <button className="loginbtn"> Login </button>
        </Paper>
        <Paper
              component='form1'
              className='form1'
              id='register'
              onSubmit={onhandleSubmit}
              sx={{
                borderRadius: 20,
                border: '1px solid #ccc',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 6 },
                height: '40px',
              }}
              >
                <input
                 className='username'
                 placeholder='Enter your Username'
               />
                <input
                 className='firstname'
                 placeholder='Enter your Firstname'
               />
                <input
                 className='lastname'
                 placeholder='Enter your Lastname'
               />
                <input
                 className='email'
                 placeholder='Enter your Email Address'
               />
                <input
                 className='password'
                 placeholder='Enter your Password'
               />
                <input
                 className='cpassword'
                 placeholder='Enter your Confirm Password'
               />
               <span>I agree to Terms & Conditions</span><input type={CheckBox} className='checkbox'/>
               <button className="registerbtn"> Register </button>
        </Paper>
    </div>
    
  )

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";

}
function login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";

}

export default loginandregister
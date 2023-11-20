import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Style.css'
import SignupAnimate from '../../pages/RegistrationAnimation/SignupAnimate';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/signup', values)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/login');
        } else {
          alert("Oops, something went wrong. Please try again later");
        }
      })
      .catch(err => {
        console.log(err);
        alert("Oops, something went wrong. Please try again later");
      });
  };

  return (
    <div className='signing'>
      <div className='signing-animate'>
      <div>
      <div className='signAnimate'>
      <SignupAnimate />
      </div>
      </div>
      <div className='sign-up'>
        <h1>Welcome to pineApple</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label><br/>
            <input type='text' 
            className='name'
            placeholder='Enter Name' name='name' onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div>
            <label>Email</label><br/>
            <input type='text' 
             className='email'
            placeholder='Enter email' name='email' onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div>
            <label>Password</label><br/>
            <input type='password' 
            className='password' placeholder='Enter password' name='password' onChange={e => setValues({ ...values, password: e.target.value })} />
          </div>
          <div className='agreement'>
            <input type='checkbox'/> I agree to the terms and conditions
          </div>
          <button className='res-btn'>Register</button>
          <div >
            <p className='sign'>Already have an account? <Link to='/login' className='signup-link'>Login</Link> here</p>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;
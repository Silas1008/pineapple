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
    <div className='Signup'>
      <div className='Signup-animation'>
      <SignupAnimate/>
      </div>
      <div className='signup-form'>
        <div>Welcome to pineApple</div>
        <form onSubmit={handleSubmit}>
          <div className='name'>
            <label>Name</label>
            <input type='text' placeholder='Enter Name' name='name' onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div className='email'>
            <label>Email</label>
            <input type='text' placeholder='Enter email' name='email' onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div>
            <label>Password</label>
            <input type='password' placeholder='Enter password' name='password' onChange={e => setValues({ ...values, password: e.target.value })} />
          </div>
          <div className='agreement'>
            <input type='checkbox' /> <p>I agree to the terms and conditions</p>
          </div>
          <button className='signup-button'>Register</button>
          <div>
            <p>Already have an account? <Link to='/login'>Login</Link> here</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
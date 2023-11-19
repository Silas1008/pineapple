import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Style.css'
import LoginAnimate from '../../pages/RegistrationAnimation/LoginAnimate';

const Login = ({ auth, setAuth }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/login', values);
      if (res.data.Status === 'Success') {
        setAuth(true);
        if (keepLoggedIn) {
          
          document.cookie = `token=${res.data.token}; max-age=${60 * 60 * 24 * 7}`;
        }
        navigate('/dashboard');
      } else {
        alert('Password does not match.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('Oops, something went wrong. Please try again later.');
    }
  };
  return (
    <div className='Login'>
      <div className='login-animation'>
      <LoginAnimate/>
      </div>
      <div className='login-form'>
        <div>Welcome back!</div>
        <form onSubmit={handleSubmit}>
          <div className='email'>
            <label>Email</label>
            <input
              type='text'
              placeholder='Enter email'
              name='email'
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className='password'>
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter password'
              name='password'
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>
          <div className='agreement'>
          <input
            type='checkbox'
            checked={keepLoggedIn}
            onChange={() => setKeepLoggedIn(!keepLoggedIn)}
          />
          <p>Keep me logged in</p>
        </div>
          <button className='login-button' type='submit'>
            Login
          </button>
          <div>
            <p>
              Not yet a member <Link to='/signup'>Signup </Link>now.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
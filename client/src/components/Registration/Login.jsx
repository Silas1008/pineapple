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
    <div className='logging'>
      <div className='logging-animate'>
      <div >
      <div className='signAnimate'><LoginAnimate/></div>
      </div>
      <div className='login'>
        <h1>Welcome back!</h1>
        <form onSubmit={handleSubmit}>
          <div >
            <label>Email</label><br/>
            <input
              type='text'
              placeholder='Enter email'
              name='email'
              className='email'
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div >
            <label>Password</label><br/>
            <input
              type='password'
              placeholder='Enter password'
              name='password'
              className='password'
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>
          <div className='agreement'>
          <input
            type='checkbox'
            checked={keepLoggedIn}
            onChange={() => setKeepLoggedIn(!keepLoggedIn)}
            className='checkbox'
          />
          Keep me logged in
        </div>
          <button type='submit'
          className="res-btn">
            Login
          </button>
          <div>
            <p className='sign'>
              Not yet a member <Link to='/signup' className='signup-link ' >Signup </Link>now.
            </p>
          </div>
        </form>
      </div>
     </div>
    </div>
  );
};

export default Login;
import React from 'react'
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
   <div className='landing'>
   
   <div className="container-one">
   Wanna animate?
   </div> 

    <div className='course-btn'>
     <Link to='/bounce'><button>Animate</button></Link>
     <Link to='/types'><button>Animations</button></Link>
    </div>

   </div>
  )
}

export default Landing
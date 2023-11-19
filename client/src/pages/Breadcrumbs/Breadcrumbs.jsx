import React from 'react'
import { Link } from 'react-router-dom'
import Notebook from '../../Assets/notebook.gif';
import './Breadcrumbs.css'

const Breadcrumbs = () => {
  return (
    <div className='breadcrumbs'>
      <div className='breadcrumbs-desc'>
      <h1>Please <Link to='/login'>Login</Link> to Access Courses</h1>
      </div>

      <div className='notebook'>
       <img src={Notebook} alt=''/>
      </div>

      
    </div>
  )
}

export default Breadcrumbs

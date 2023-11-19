import React from 'react';
import { PRODUCTS } from '../../Assets/courses';
import Product from './Product';
import './Courses.css';

const Courses = () => {
  return (
    <div className='course'>
      <div className='courseProduct'>
        <h1>"Always call its className"</h1>
        <div className='products'>
          {PRODUCTS.map((product) => 
            <Product key={product.id} data={product}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Courses;

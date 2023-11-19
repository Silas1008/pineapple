import React, { useContext } from 'react';
import './Courses.css'
import { CourseContext } from '../../Context/CourseContextProvider';
import { Link } from 'react-router-dom';


const Product = (props) => {
  const { id, img, title } = props.data;
  const { addToDashboard } = useContext(CourseContext);

  return (
    <div className='product'>
      <div className='course-title'>
        <p>
          <b>{title}</b>
        </p>
      </div>

      <br />

      <img className="courseImg" src={img} alt='' /><br />
      <Link to={`/snippets/${id}`}>
        <button className='learnBtn' onClick={() => addToDashboard(id)}>
          Learn now
        </button>
      </Link>
    </div>
  );
};

export default Product;

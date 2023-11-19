
import React, { useContext } from 'react';
import { CourseContext } from '../../Context/CourseContextProvider';
import './Dashboard.css';
import axios from 'axios';

const DashboardItem = (props) => {
  const { id, img, title } = props.data;
  const { removeFromDashboard } = useContext(CourseContext);

  const handleDoneClick = async () => {
    try {
      await axios.post('http://localhost:8080/profile', { id, img, title });
      console.log('Data inserted into the database');
    } catch (error) {
      console.error('Error inserting data into the database', error);
    }
  };

  return (
    <div className='dashItem'>
      <div className='dash-ctn'>
        <div className='dash-title'>
          <b>{title}</b>
        </div>
        <img src={img} alt='' />
        <div>
          <button className='dash-btn' onClick={handleDoneClick}>Done</button>
          <button className='dash-btn' onClick={() => removeFromDashboard(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;

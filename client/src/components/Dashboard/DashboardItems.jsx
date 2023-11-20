
import React, { useContext } from 'react';
import { CourseContext } from '../../Context/CourseContextProvider';
import './Dashboard.css';


const DashboardItem = (props) => {
  const { id, img, title } = props.data;
  const { removeFromDashboard } = useContext(CourseContext);

  

  return (
    <div className='dashItem'>
      <div className='dash-ctn'>
        <div className='dash-title'>
          <b>{title}</b>
        </div>
        <img src={img} alt='' />
        <div>
          
          <button className='dash-btn' onClick={() => removeFromDashboard(id)}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;

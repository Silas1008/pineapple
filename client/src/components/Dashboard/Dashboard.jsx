import React, { useEffect,  useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css' ;
import { PRODUCTS } from '../../Assets/courses';
import { CourseContext } from '../../Context/CourseContextProvider';
import DashboardItem from '../Dashboard/DashboardItems'
import DashboardSideBar from '../../pages/SideBars/DashboardSideBar/DashboardSideBar';

const Dashboard = ({ auth }) => {
  const navigate = useNavigate();

  const { dashboardItems } = useContext(CourseContext);

  useEffect(() => {
    if (!auth) {
     
      navigate('/breadcrumbs');
    } else {
       
      axios.get('http://localhost:8080/dashboard')
        .then(res => {
          
        })
        .catch(error => {
          console.error('Error fetching dashboard data:', error);
        });
    }
  }, [auth, navigate]);

  return (
    <div className='dashboard-main'>
    <div className='dashboard-sidebar'>
    <DashboardSideBar/>
    </div>
    <div className='dashboard'>
      {auth ? (
        <div>
          <h3>Dashboard Content</h3>
         
        </div>
      ) : null}
      <div className='dashboard'>
      <div className='progressDash'>
         Current lessons
        <div className='progressBoard'>
          {PRODUCTS.map((product) => (
            dashboardItems[product.id] && dashboardItems[product.id] !== 0
              ? <DashboardItem key={product.id} data={product} />
              : null
          ))}
        </div>
      </div>

    </div>
    </div>
    </div>
  );
};

export default Dashboard;

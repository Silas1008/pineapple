import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../Assets/courses';

export const CourseContext = createContext(null);

const getDefaultDashboard = () => {
  let dashboard = {};
  for (let i = 1; i < PRODUCTS.length; i++) {
    dashboard[i] = 0;
  }
  return dashboard;
};

const CourseContextProvider = (props) => {
  
  const [dashboardItems, setDashboardItems] = useState(() => {
    const storedDashboard = localStorage.getItem('dashboardItems');
    return storedDashboard ? JSON.parse(storedDashboard) : getDefaultDashboard();
  });

  
  useEffect(() => {
    localStorage.setItem('dashboardItems', JSON.stringify(dashboardItems));
  }, [dashboardItems]);

  const addToDashboard = (itemId) => {
    setDashboardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromDashboard = (itemId) => {
    setDashboardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { PRODUCTS, dashboardItems, addToDashboard, removeFromDashboard };
  

  return (
    <CourseContext.Provider value={contextValue}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;

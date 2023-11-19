import React from 'react';
import '../SideBar.css'
import {DashboardSideBarData} from '../DashboardSideBar/DashboardSideBarData';

const DashboardSideBar = () => {
  return (
    <div className='sidebar'>
     <ul className='sidebarList'>

     {DashboardSideBarData.map((val, key) => {
        return <li key={key} 
        className='row'
        id='{window.location.path == cal.link ? "active" ? ""}'
        onClick={() => 
            {window.location.pathname = val.link}}>

        <div id='icon'>
        {val.icon}
        </div> {" "}

        <div id='title'>
         {val.title}
        </div>
        </li>
    })}
     </ul>
    </div>
  );
}

export default DashboardSideBar;

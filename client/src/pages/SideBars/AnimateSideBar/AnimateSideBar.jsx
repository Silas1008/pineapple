import React from 'react';
import '../SideBar.css'
import {AnimateSideBarData} from '../AnimateSideBar/AnimateSideBarData';

const AnimateSideBar = () => {
  return (
    <div className='sidebar'>
     <ul className='sidebarList'>

     {AnimateSideBarData.map((val, key) => {
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

export default AnimateSideBar;

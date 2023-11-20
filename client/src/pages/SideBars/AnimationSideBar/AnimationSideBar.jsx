import React from 'react';
import '../SideBar.css'
import {AnimationSideBarData} from '../AnimateSideBar/AnimateSideBarData';

const AnimationSideBar = () => {
  return (
    <div className='sidebar'>
     <ul className='sidebarList'>

     {AnimationSideBarData.map((val, key) => {
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

export default AnimationSideBar;

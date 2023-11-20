import React from 'react';
import './Hover.scss';

const Hover = () => {
  return (
    <div className="hover-container">
      <div className="hover-body">
        <div id="circle-container">
        <div id="cc">
        <div className="circle" id="five"></div>
        <div className="circle" id="four"></div>
        <div className="circle" id="three"></div>
        <div className="circle" id="two"></div>
        <div className="circle" id="one"></div>
        </div>
      </div>
  
      </div>

      <div>
        <div className="hoverBtn">
          <div className="hover-title"><h1>Simple hover effects with <code>box-shadow</code></h1><br/></div>
        <div className='hovers' >
          <button className="hoverButton fill">Fill In</button>
          <button className="hoverButton pulse">Pulse</button>
          <button className="hoverButton close">Close</button>
          <button className="hoverButton raise">Raise</button>
          <button className="hoverButton up">Fill Up</button>
          <button className="hoverButton slide">Slide</button>
          <button className="hoverButton offset">Offset</button>    
        </div>
        </div>
      </div>
   
    </div>
  );
};

export default Hover;

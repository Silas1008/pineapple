import React, { useEffect } from 'react';
import './Properties.scss';

const Properties = () => {
  
  useEffect(() => {
    // This code will run when the component is mounted
    var writingMode = document.getElementById("writingMode");
    writingMode.addEventListener("change", function (evt) {
      document.getElementById("logical-container").style.writingMode = evt.target.value;
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      writingMode.removeEventListener("change", function (evt) {
        document.getElementById("logical-container").style.writingMode = evt.target.value;
      });
    };
  }, []);
  return (
  <div className='logical-value'>
    <div className='properties'>
      <div className='logical-properties'>
        <div className="properties-controls">
        <select id="writingMode">
          <option value="horizontal-tb">horizontal-tb</option>
          <option value="vertical-lr">vertical-lr</option>
          <option value="vertical-rl">vertical-rl</option>
        </select>
        </div>
        </div>
        
       <div>
        <div id="logical-container">
        <div className="logical-box logical">
          <div className="abspos"></div>
        </div>
        <div className="logical-box physical">
          <div className="abspos"></div>
        </div>
        </div>
        </div>
      </div>

      <div>
        <div className="inline">
        <h1>CSS Logical Properties and Values</h1>
        
        <h2 >margin-inline and margin-block (not suppported by IE10, 11)</h2>
        <div className="thing"></div> <br/>
        
        <h2>border-inline and border-block (not suppported by IE10, 11)</h2>
        
      <div className="borders"> 
        <p className="border-block">border-block</p>
      <p className="border-inline">border-inline</p>
        </div><br/>
        
        <p className="border-small"><a href="https://css-tricks.com/css-logical-properties-and-values/" target="_blank">More info</a></p><br/>
        
        <h1>gap property (valid in flex, grid multi-column layouts)</h1>
        
        <h2>gap or row-gap and column-gap in flex (not suppported by IE10, 11)</h2>
        
        <div className="values-container">
        <div className="valItem"></div>
        <div className="valItem"></div>
        <div className="valItem"></div>
        <div className="valItem"></div>
        <div className="valItem"></div>
        <div className="valItem"></div>        
      </div><br/>
        
        <p className="border-small"><a href="https://css-tricks.com/almanac/properties/g/gap/" target="_blank">More info</a></p>  
        
      </div>
      </div>
  </div>
  )
}

export default Properties
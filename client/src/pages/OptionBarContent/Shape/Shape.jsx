import React from 'react'
import './Shape.scss';

const Shape = () => {
  return (
    <div className='grid-animation'>
    <div className='cubics'>
      <div className='cubic' >
      <img src="https://weblive.ibj.com/ibj/website/images/block.png"  className="element" width="238"/>
      <img src="https://weblive.ibj.com/ibj/website/images/block.png"  className="element" width="238"/>
      <img src="https://weblive.ibj.com/ibj/website/images/block.png"  className="element" width="238"/>
      </div>

      <div className='para'>
      The shape-outside property in CSS is used to define a non-rectangular shape that content should flow around. This property is often used with floated elements to create more complex text wrapping or content layouts. It allows you to make text or other elements wrap around custom shapes, such as circles, polygons, or even images with transparent backgrounds.
      </div>
    </div>

      <div className="cubics css-shapes">
      <div >
      <h1 className="shape-h1"> CSS Shapes</h1>
  
      <div className="shapes-row">
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Square</h4>
               <div id="square" className="shape"></div>
            </div>
         </div>
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Circle</h4>
               <div id="circle" className="shape"></div>
            </div>
         </div>
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Rectangle</h4>
               <div id="rectangle" className="shape"></div>
            </div>
         </div>
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Oval</h4>
               <div id="oval" className="shape"></div>
            </div>
         </div>
      </div>
      
      <div className="shapes-row">
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Rounded Box</h4>
               <div id="roundedBox" className="shape"></div>
            </div>
         </div>
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Triangle</h4>
               <div id="triangle" className="shape"></div>
            </div>
         </div>
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Trapezoid</h4>
               <div id="trapezoid" className="shape"></div>
            </div>
         </div>
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Parallelogram</h4>
               <div id="parallelogram" className="shape"></div>
            </div>
         </div>
      </div>
      
      <div className="shapes-row">
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Pentagon</h4>
               <div id="pentagon" className="shape"></div>
            </div>
         </div>
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Hexagon</h4>
               <div id="hexagon" className="shape"></div>
            </div>
         </div>
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Octagon</h4>
               <div id="octagon" className="shape"></div>
            </div>
         </div>
         <div className="col-xs-3 shape-box">
            <div className="inner">
               <h4>Star</h4>
               <div id="star" className="shape"></div>
            </div>
         </div>
      </div>
      </div>
     
      </div>
   </div>
  )
}

export default Shape
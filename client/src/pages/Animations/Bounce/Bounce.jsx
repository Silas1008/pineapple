import React from 'react'
import './Bounce.css'

const Bounce = () => {
  return (
    <div>
      <div className='bouncing'>
        <div className='bounce'>
        <div id="bounceWrapper">
          <div id="bounce-container">
          <h1>Hover over text to pause.</h1><br/>
            </div>
          </div>
          <div/>
        </div>
         <div className='bouncesmall'>
              <p ><small>Inspired by <a href="https://dribbble.com/shots/3281814-Solitary-Saunter">Tomas Brunsdon</a>.</small></p>
          </div>
      </div>

    <div className='bounce-two'>
        <h1>CSS Animation</h1>
        <div className="bounce-row">
          
          <div className="bounce-cell">
            <div className="bounce-circle gelatine"></div><br/>
            <p >gelatine</p>
          </div>

          <div className="bounce-cell">
            <div className="square hithere"></div>
            <p>hi there!</p>
          </div>

          <div className="bounce-cell">
            <div className="bounce-circle bounce1"></div>
            <p >bounce</p>
          </div>
        </div>
        
        <div className="bounce-row">
          
          <div className="bounce-cell">
            <div className="bounce-circle bounce2"></div>
            <p >bounce 2</p>
          </div>

          <div className="bounce-cell">
            <div className="bounce-circle bounce-in"></div>
            <p >bounce in</p>
          </div>
          <div className="bounce-cell">
            <div className="bounce-circle bounce-in-right"></div>
            <p>bounce in right</p>
          </div>
        </div>

        <div className="bounce-row">
          <div className="bounce-cell">
            <div className="bounce-circle bounce-out"></div>
            <p >bounce out</p>
          </div>
          <div className="bounce-cell">
            <div className="bounce-circle bounce-out-down"></div>
            <p >bounce out down</p>
          </div>
          
          <div className="bounce-cell">
            <div className="bounce-circle hinge"></div>
            <p >hinge</p>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Bounce

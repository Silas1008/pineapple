import React from 'react'
import './Svg.scss';

const Root = () => {
  return (
    <div className='root-animation'>
      <div className='pumpkin-section'>
         <div className="pumpkin">
        <div className="sides"></div>
        <div className="inside"></div>
        <div className="stem"></div>
        </div>
       <div>  <h1 className="legend">Ceci n'est pas une pumpkin.</h1> </div>
      </div>

      <div className='section-sea'>
        <div className="sea">
        <div className="circle-wrapper">
            <div className="bubble"></div>
            <div className="submarine-wrapper">
                <div className="submarine-body">
                    <div className="window"></div>
                    <div className="engine"></div>
                    <div className="light"></div>
                </div>
                <div className="helix"></div>
                <div className="hat">
                  <div className="leds-wrapper">
                      <div className="periscope"></div>
                      <div className="leds"></div>
                  </div>
                </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Root
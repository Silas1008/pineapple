import React from 'react'
import './Svg.scss';

const Root = () => {
  return (
    <div className='root-animation'>
      <div className='pumpkin-section'>
         <div class="pumpkin">
        <div class="sides"></div>
        <div class="inside"></div>
        <div class="stem"></div>
        </div>
       <div>  <h1 class="legend">Ceci n'est pas une pumpkin.</h1> </div>
      </div>

      <div className='section-sea'>
        <div class="sea">
        <div class="circle-wrapper">
            <div class="bubble"></div>
            <div class="submarine-wrapper">
                <div class="submarine-body">
                    <div class="window"></div>
                    <div class="engine"></div>
                    <div class="light"></div>
                </div>
                <div class="helix"></div>
                <div class="hat">
                  <div class="leds-wrapper">
                      <div class="periscope"></div>
                      <div class="leds"></div>
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
import React from 'react';
import './Houdini.css'

const Houdini = () => { 

  return (
    <div>
        <div className='houdini'>
            <h1>HOUDINI CSS PAINTING API</h1>
            <div className="content-wrapper">
          <div className='houdiniCtn'>
            <h1>Awesome Mockup</h1>
            <p>This uses placeholder boxes created with the CSS Paint API. Neat! You can resize them by dragging their bottom right corners.</p>
            <div className="houdini-row">
              <div className="slot">
                <div className="placeholder"></div>
              </div>
              <div className="slot">
                <div className="placeholder"></div>
              </div>
              <div className="slot">
                <div className="placeholder"></div>
              </div>

            </div>
          </div>
          <aside>
            <div className="placeholder"></div>
          </aside>
        </div>

        </div>

        <div>
      
      
        </div>
    </div>
  )
  
}

export default Houdini

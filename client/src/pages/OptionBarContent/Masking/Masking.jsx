import React from 'react';
import './Masking.scss';

const Masking = () => {
  return (
    <div className='masking-container'>
        <div class="masking-section">
          <h1>Image Masking in Text</h1>
        </div>

        <div className="masking-section3 ">
        <div class="mask-header">CSS-MASK BOX HOVER ANIMATION 
        </div>
          <div className="mask-box">
          <div className="button-container-1">
            <span className="mas">MASK1</span>
            <button id='work' type="button" className="Hover">MASK1</button>
          </div>

        <div className="button-container-2">
          <span className="mas">MASK2</span>
        <button type="button" className="Hover">MASK2</button>
        </div>

        <div className="button-container-3">
          <span className="mas">MASK3</span>
        <button type="button" className="Hover">MASK3</button>
        </div>
       </div>

      <div className="mask-footer">Inspired by <a href="https://tympanus.net/codrops/2016/09/29/transition-effect-with-css-masks/">this</a> codrops article</div>

    </div>
    </div>
  );
};

export default Masking;

import React from 'react';
import './Color.scss';

const Color = () => {
  return (
    <div>
      <div className="color-wheel">
        <div className="color-center">
          <div className="color-pin"></div>
        </div>
        <div className="wheel">
          <ul className="colors">
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
            <li className="color"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Color;

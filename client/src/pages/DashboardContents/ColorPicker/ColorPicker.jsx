import React, { useState } from 'react';
import './ColorPicker.css';
import { SketchPicker } from 'react-color';
import DashboardSideBar from '../../SideBars/DashboardSideBar/DashboardSideBar';

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("#fff");

  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
  };

  const appStyle ={
    backgroundColor: currentColor
  }

  return (
    <div id='color-picker-main' className='App' style={appStyle}>
      <div className='color-dashboard'>
        <DashboardSideBar />
      </div>

      <div className='color-picker'>
        <SketchPicker 
          color={currentColor}
          onChangeComplete={handleOnChange}
        />
      </div>
    </div>
  );
};

export default ColorPicker;

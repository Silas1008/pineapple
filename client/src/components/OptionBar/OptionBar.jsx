import React from 'react';
import './OptionBar.css';
import { Link } from 'react-router-dom';

const OptionBar = () => {
  return (
    <div className='option-container'>
      <div className='courses'>
        <Link to='/textanimation'><button>Text</button></Link>
        <Link to='/hover'><button>Hover</button></Link>
        <Link to='/root'><button>SVG</button></Link>
        <Link to='/masking'><button>Masking</button></Link>
        <Link to='/grid'><button>Shape</button></Link>
        <Link to='/initial'><button>Initial Letter</button></Link>
        <Link to='/flexbox'><button>Flexbox</button></Link>
        <Link to='/gradients'><button>Gradients</button></Link>
        <Link to='/properties'><button>Properties</button></Link>
      </div>
    </div>
  );
};

export default OptionBar;

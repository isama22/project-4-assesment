  import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (
  <div className='CircleSelector'>
    {props.clicked === 1 ? (
    <button className="selected">CIRCLE 1 SELECTED</button>)
    : 
    (<button 
      onClick={() => props.handleClick(1)}>
        SELECT CIRCLE 1
    </button>)
    }

    {props.clicked === 2 ? (
    <button className="selected">CIRCLE 2 SELECTED</button>)
    : 
    (<button 
      onClick={() => props.handleClick(2)}>
        SELECT CIRCLE 2
    </button>)
    }

{props.clicked === 3 ? (
    <button className="selected">CIRCLE 3 SELECTED</button>)
    : 
    (<button 
      onClick={() => props.handleClick(3)}>
        SELECT CIRCLE 3
    </button>)
    }

    {props.clicked === 4 ? (
    <button className="selected">CIRCLE 4 SELECTED</button>)
    : 
    (<button 
      onClick={() => props.handleClick(4)}>
        SELECT CIRCLE 4
    </button>)
    }
  </div>
);

export default CircleSelector;
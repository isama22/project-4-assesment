import React from 'react';
import './Circles.css'

const Circles = (props) => (
  <section className='Circles'>
    <div 
    className={props.clicked === 1 
    ? 'selected' : ''}>1</div>
    <div 
    className={props.clicked === 2 
    ? 'selected' : ''}>2</div>
    <div 
    className={props.clicked === 3 
    ? 'selected' : ''}>3</div>
    <div 
    className={props.clicked === 4 
    ? 'selected' : ''}>4</div>
  </section>
);

export default Circles;
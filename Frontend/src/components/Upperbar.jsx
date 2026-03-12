import React from 'react';
import { Link } from 'react-router-dom';
import './Upperbar.css';

export default function Upperbar() {
  return (
    <div className='upperbarnav'>
      <h3>
        <Link to="/delivery">Check our delivery areas here! Click here</Link>
      </h3>
    </div>
  );
}
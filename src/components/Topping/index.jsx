import React, { useState } from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping }) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <div className="topping">
      <Check checked={checked} onChange={handleCheck} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;

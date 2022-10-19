import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [checked, setChecked] = useState(toppings);

  const handleCheck = (index) => {
    const newToppings = [...toppings];
    newToppings[index].selected = !checked[index].selected;
    setChecked(newToppings);
  };

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onCheckChange={() => handleCheck(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;

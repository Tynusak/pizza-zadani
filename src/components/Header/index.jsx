import React from 'react';
import './style.css';
import { usePrefs } from '../../context';

export const Header = () => {
  const { veganOnly, handleVeganOnly } = usePrefs();
  return (
    <header>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <p>
        {veganOnly
          ? 'Do you want also non-vegan ingredients? Please click the button'
          : 'Do you want only vegan ingredients? Please click the button'}
      </p>
      <button
        className={veganOnly ? 'button ' : 'button button--vegan'}
        onClick={handleVeganOnly}
      >
        {veganOnly ? 'All ingredients' : 'Vegan only ingredients'}
      </button>
    </header>
  );
};

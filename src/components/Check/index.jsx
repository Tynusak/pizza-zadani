import React from 'react';
import './style.css';
import { usePrefs } from '../../context';

const Check = ({ checked, onChange, vegan }) => {
  const { veganOnly } = usePrefs();

  return (
    <button
      className={veganOnly && !vegan ? 'check check--disabled' : 'check'}
      onClick={onChange}
    >
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;

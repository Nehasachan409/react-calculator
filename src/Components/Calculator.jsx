import React from 'react'; // Add this if using JSX with older React versions

import { useState } from 'react'
import './Calculator.css'


function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
  
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {['7', '8', '9', '/', 
          '4', '5', '6', '*', 
          '1', '2', '3', '-', 
          '0', '.', '=', '+'].map((btn, i) => (
          <button
            key={i}
            onClick={() =>
              btn === '=' ? handleEqual() : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear} className="clear">Clear</button>
      </div>
    </div>
  );
}

export default Calculator;

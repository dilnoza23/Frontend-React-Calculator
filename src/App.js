import React, { useState } from 'react';
import './App.css'

function App() {
  const [operation, setOperation] = useState('');
  const [typed, setTyped] = useState('0');
  
  const handleButtonClick = (value) => {
    if (value === 'C') {
      setTyped('0');
    } else if (value === '=') {
      try {
        const result = eval(operation + typed);
        setOperation('');
        setTyped(result.toString());
      } catch (error) {
        setTyped('Error');
      }
    } else {
      if (typed === '0') {
        setTyped(value);
      } else {
        setTyped(prevTyped => prevTyped + value);
      }
    }
  };
  
  return (
    <div className="container">
      <div className="calc-body">
        <div className="calc-screen">
          <div className="calc-operation">{operation}</div>
          <div className="calc-typed">{typed}<span className="blink-me">_</span></div>
        </div>
        <div className="calc-button-row">
          <div className="button c" onClick={() => handleButtonClick('C')}>C</div>
          <div className="button l" onClick={() => handleButtonClick('≠')}>≠</div>
          <div className="button l" onClick={() => handleButtonClick('%')}>%</div>
          <div className="button l" onClick={() => handleButtonClick('/')}>/</div>
        </div>
        <div className="calc-button-row">
          <div className="button" onClick={() => handleButtonClick('7')}>7</div>
          <div className="button" onClick={() => handleButtonClick('8')}>8</div>
          <div className="button" onClick={() => handleButtonClick('9')}>9</div>
          <div className="button l" onClick={() => handleButtonClick('x')}>x</div>
        </div>
        <div className="calc-button-row">
          <div className="button" onClick={() => handleButtonClick('4')}>4</div>
          <div className="button" onClick={() => handleButtonClick('5')}>5</div>
          <div className="button" onClick={() => handleButtonClick('6')}>6</div>
          <div className="button l" onClick={() => handleButtonClick('−')}>−</div>
        </div>
        <div className="calc-button-row">
          <div className="button" onClick={() => handleButtonClick('1')}>1</div>
          <div className="button" onClick={() => handleButtonClick('2')}>2</div>
          <div className="button" onClick={() => handleButtonClick('3')}>3</div>
          <div className="button l" onClick={() => handleButtonClick('+')}>+</div>
        </div>
        <div className="calc-button-row">
          <div className="button" onClick={() => handleButtonClick('.')}>.</div>
          <div className="button" onClick={() => handleButtonClick('0')}>0</div>
          <div className="button" onClick={() => handleButtonClick('<<')}>{'<<'}</div>
          <div className="button l" onClick={() => handleButtonClick('=')}>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;

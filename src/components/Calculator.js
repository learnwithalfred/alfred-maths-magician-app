/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import InputElement from './InputElement';
import calculate from '../logic/calculate';
import './Calculator.css';
import Button from './button';

const Calculator = () => {
  const [obj, setObj] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setObj((prevState) => {
      const results = {
        ...prevState,
        ...calculate(prevState, buttonName),
      };
      return results;
    });
  };

  const results = obj.next ? obj.next : obj.total;
  const rowStyles = {
    width: '100%',
    color: 'black',
    display: 'flex',
    flexWrap: 'nowrap',
  };

  const containerStyles = {
    width: '500px',
  };

  const orangeColor = '#F5913E';

  return (
    <>
      <div style={containerStyles}>
        <div style={rowStyles}>
          <InputElement
            width="100%"
            backgroundColor="#858694"
            value={results}
            elementPosition="flex-end"
          />
        </div>
        <div style={rowStyles}>
          <Button text="AC" handleClick={handleClick} />
          <Button handleClick={handleClick} text="+/-" />
          <Button handleClick={handleClick} text="%" />
          <Button
            handleClick={handleClick}
            text="÷"
            backgroundColor={orangeColor}
          />
        </div>

        <div style={rowStyles}>
          <Button handleClick={handleClick} text="7" />
          <Button handleClick={handleClick} text="8" />
          <Button handleClick={handleClick} text="9" />
          <Button
            handleClick={handleClick}
            text="x"
            backgroundColor={orangeColor}
          />
        </div>

        <div style={rowStyles}>
          <Button handleClick={handleClick} text="4" />
          <Button handleClick={handleClick} text="5" />
          <Button handleClick={handleClick} text="6" />
          <Button
            handleClick={handleClick}
            text="-"
            backgroundColor={orangeColor}
          />
        </div>

        <div style={rowStyles}>
          <Button handleClick={handleClick} text="1" />
          <Button handleClick={handleClick} text="2" />
          <Button handleClick={handleClick} text="3" />
          <Button
            handleClick={handleClick}
            text="+"
            backgroundColor={orangeColor}
          />
        </div>

        <div style={rowStyles}>
          <Button handleClick={handleClick} text="0" width="51%" />
          <Button handleClick={handleClick} text="." />
          <Button
            handleClick={handleClick}
            text="="
            backgroundColor={orangeColor}
          />
        </div>
      </div>
    </>
  );
};

export default Calculator;

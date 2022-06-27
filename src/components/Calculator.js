/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import InputElement from './InputElement';
import calculate from '../logic/calculate';
import './Calculator.css';
import Button from './button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: { total: null, next: null, operation: null },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState((state) => ({
      obj: {
        ...state.obj,
        ...calculate(state.obj, buttonName),
      },
    }));
  }

  render() {
    const { obj } = this.state;
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
            <Button text="AC" handleClick={this.handleClick} />
            <Button handleClick={this.handleClick} text="+/-" />
            <Button handleClick={this.handleClick} text="%" />
            <Button
              handleClick={this.handleClick}
              text="÷"
              backgroundColor={orangeColor}
            />
          </div>

          <div style={rowStyles}>
            <Button handleClick={this.handleClick} text="7" />
            <Button handleClick={this.handleClick} text="8" />
            <Button handleClick={this.handleClick} text="9" />
            <Button
              handleClick={this.handleClick}
              text="x"
              backgroundColor={orangeColor}
            />
          </div>

          <div style={rowStyles}>
            <Button handleClick={this.handleClick} text="4" />
            <Button handleClick={this.handleClick} text="5" />
            <Button handleClick={this.handleClick} text="6" />
            <Button
              handleClick={this.handleClick}
              text="-"
              backgroundColor={orangeColor}
            />
          </div>

          <div style={rowStyles}>
            <Button handleClick={this.handleClick} text="1" />
            <Button handleClick={this.handleClick} text="2" />
            <Button handleClick={this.handleClick} text="3" />
            <Button
              handleClick={this.handleClick}
              text="+"
              backgroundColor={orangeColor}
            />
          </div>

          <div style={rowStyles}>
            <Button handleClick={this.handleClick} text="0" width="51%" />
            <Button handleClick={this.handleClick} text="." />
            <Button
              handleClick={this.handleClick}
              text="="
              backgroundColor={orangeColor}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;

import React from 'react';
import InputElement from './InputElement';

class Calculator extends React.Component {
  state = {};
  render() {
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
              value="0"
              elementPosition="flex-end"
            />
          </div>
          <div style={rowStyles}>
            <InputElement value="AC" />
            <InputElement value="+/-" />
            <InputElement value="%" />
            <InputElement value={'÷'} backgroundColor={orangeColor} />
          </div>

          <div style={rowStyles}>
            <InputElement value={7} />
            <InputElement value={8} />
            <InputElement value={9} />
            <InputElement value={'X'} backgroundColor={orangeColor} />
          </div>

          <div style={rowStyles}>
            <InputElement value={4} />
            <InputElement value={5} />
            <InputElement value={6} />
            <InputElement value={'-'} backgroundColor={orangeColor} />
          </div>

          <div style={rowStyles}>
            <InputElement value={1} />
            <InputElement value={2} />
            <InputElement value={3} />
            <InputElement value={'+'} backgroundColor={orangeColor} />
          </div>

          <div style={rowStyles}>
            <InputElement value={0} width="53%" />
            <InputElement value={'.'} />
            <InputElement value={'='} backgroundColor={orangeColor} />
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;

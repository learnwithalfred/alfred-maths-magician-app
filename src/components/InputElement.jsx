import React from 'react';

class InputElement extends React.Component {
  state = {};
  render() {
    return (
      <div
        className="input-element"
        style={{
          display: 'flex',
          width: this.props.width,
          height: '50px',
          backgroundColor: this.props.backgroundColor,
          alignItems: 'center',
          justifyContent: this.props.elementPosition,
          margin: '2px',
          padding: '5px',
          fontSize: '1.3rem',
        }}
      >
        {this.props.value}
      </div>
    );
  }
}
InputElement.defaultProps = {
  width: '25%',
  backgroundColor: '#E0E0E0',
  elementPosition: 'center',
};

export default InputElement;

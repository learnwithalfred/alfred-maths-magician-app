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
        }}
      >
        {this.props.value}
      </div>
    );
  }
}
InputElement.defaultProps = {
  width: '25%',
  backgroundColor: 'gray',
  elementPosition: 'center',
};

export default InputElement;

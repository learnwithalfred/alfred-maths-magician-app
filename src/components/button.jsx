/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.handleClick = props.handleClick;
    this.backgroundColor = props.backgroundColor;
    this.width = props.width;
    this.elementPosition = props.elementPosition;
  }

  render() {
    return (
      <button
        type="button"
        className={`${this.position} ${this.className}`}
        onClick={() => this.handleClick(this.text)}
        style={{
          display: 'flex',
          width: this.width,
          height: '50px',
          backgroundColor: this.backgroundColor,
          alignItems: 'center',
          justifyContent: this.elementPosition,
          margin: '2px',
          padding: '3px',
          fontSize: '1.3rem',
          border: 'none',
          outline: 'none',
        }}
      >
        {this.text}
      </button>
    );
  }
}

Button.defaultProps = {
  width: '25%',
  backgroundColor: '#E0E0E0',
  elementPosition: 'center',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  elementPosition: PropTypes.string,
};

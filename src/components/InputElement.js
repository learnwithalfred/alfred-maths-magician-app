/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

class InputElement extends React.Component {
  render() {
    const {
      width, backgroundColor, elementPosition, value,
    } = this.props;
    InputElement.propTypes = {
      width: PropTypes.string,
      backgroundColor: PropTypes.string,
      elementPosition: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    };
    return (
      <div
        className="input-element"
        style={{
          display: 'flex',
          width,
          height: '50px',
          backgroundColor,
          alignItems: 'center',
          justifyContent: elementPosition,
          margin: '2px',
          padding: '5px',
          fontSize: '1.3rem',
        }}
      >
        {value}
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

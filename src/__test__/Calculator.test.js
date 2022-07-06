import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

describe('Calculator page should render', () => {
  it('test if Calculator page is rendered', () => {
    const calculatorTest = renderer.create(<Calculator />).toJSON();
    expect(calculatorTest).toMatchSnapshot();
  });
});

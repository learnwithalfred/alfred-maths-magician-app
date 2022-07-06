import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

describe('Test of Header', () => {
  it('test if Header is rendered', () => {
    const headerTest = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(headerTest).toMatchSnapshot();
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Homepage from './Homepage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
});

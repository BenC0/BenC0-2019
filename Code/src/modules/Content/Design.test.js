import React from 'react';
import ReactDOM from 'react-dom';
import Design from './Design';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Design />, div);
  ReactDOM.unmountComponentAtNode(div);
});

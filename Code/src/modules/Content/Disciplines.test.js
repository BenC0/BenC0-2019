import React from 'react';
import ReactDOM from 'react-dom';
import Disciplines from './Disciplines';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Disciplines />, div);
  ReactDOM.unmountComponentAtNode(div);
});

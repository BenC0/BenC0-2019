import React from 'react';
import ReactDOM from 'react-dom';
import Themes from './Themes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Themes />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import UserBehaviour from './UserBehaviour';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserBehaviour />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import Languages from './Languages';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Languages />, div);
  ReactDOM.unmountComponentAtNode(div);
});

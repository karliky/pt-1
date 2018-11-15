import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout/Layout';

it('expect to have 1337 gnomes', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";

import Layout from './layout/Layout';

describe('testing layout', () => {
  const wrapper = shallow(<Layout />);

  it ('includes one section', () => {
    expect(wrapper.find('span.bar')).to.be.equal('!')
  })
})

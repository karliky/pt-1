import React from 'react';
import { expect } from "chai";
import { shallow } from "enzyme";

import Layout from './layout/Layout';

describe('testing layout', () => {
  const wrapper = shallow(<Layout />);

  it ('includes one section', () => {
    expect(wrapper.find('span.bar')).to.be.equal('test!')
  })
})

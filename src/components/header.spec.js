import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Header from './header';


describe('<Header />', () => {
  it('should contain a title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).to.have.length.above(0);
  });

  it('should display 2 headings', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h3')).to.have.length(2);
  });
});

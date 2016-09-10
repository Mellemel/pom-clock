import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Header from './header';


describe('<Header />', () => {
  it('should display 2 headings', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h3')).to.have.length(2);
  });

  
  it('should display a button', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('button')).to.have.length(1);
  });
});

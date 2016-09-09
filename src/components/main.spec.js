import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import Main from './main';

describe('<Main />', () => {
  it('should have a title', () => {
    const wrapper = shallow(<Main />);
    const h1 = wrapper.find('h1');

    expect(wrapper.contains(h1)).to.be.true.and(h1.text()).to.have.length.above(0);
  });

  it('should have 2 headings with \'Break Length\' and \'Session Length\'', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.find(<h3/>)).to.have.length(2);
    expect(wrapper.findWhere(n => n.text() == 'Break Length')).to.have.length(1);
    expect(wrapper.findwhere(n => n.text() == 'Session Length')).to.have.length(1);
  });

  it('should have a button that switches between start and stop when pressed', () => {
    const wrapper = shallow(<Main />);
    const button = wrapper.find('button');

    expect(wrapper.contains(button)).to.be.equal(true);
    expect(button.text()).to.equal('Start');
    expect(button.simulate('click').text()).to.equal('Stop');

  });

  it('should switch the state between true and false when button is pressed', () => {
    const wrapper = shallow(<Main />);
    const button = wrapper.find('button');

    expect(wrapper.state().start).to.be.true;
    button.simulate('click');
    expect(wrapper.state().start).to.be.false;
  });

  it('should start/stop the timer of the current clock', () => {
    const wrapper = mount(<Main />);
    const button = wrapper.find('button').debug();
  });

  it('should disable all click actions');
});
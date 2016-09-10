import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import Main from './main';

describe('<Main />', () => {
  it('should contain a title', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('h1').text()).to.have.length.above(0);
  });

  it('should contain a header', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('Header')).to.be.of.length(1);
  });

  it('should contain a pomodoro list', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('Pomodorolist')).to.be.of.length(1);
  });

  it('should switch the state between true and false when button is pressed', () => {
    const wrapper = mount(<Main />);

    expect(wrapper.state().start).to.be.false;
    wrapper.find('#header button').simulate('click');
    expect(wrapper.state().start).to.be.true;
  });

  it('should have a button that switches between start and stop when pressed', () => {
    const wrapper = mount(<Main />);
    const button = wrapper.find('#header button');

    expect(button.text()).to.equal('Start');
    expect(button.simulate('click').text()).to.equal('Stop');
    expect(button.text()).to.equal('Stop');
  });

  it('should start/stop the timer of the current clock');

  it('should disable all click actions when start button displays false');
});
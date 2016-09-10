import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import Pomodorolist from './pomodorolist';
import Pomodoro from './pomodoro';

describe("<Pomodorolist />", () => {
  it('should contain at least one PomodoroClock', () => {
    const wrapper = shallow(<Pomodorolist />);
    expect(wrapper.contains(<Pomodoro />)).to.be.equal(true);
  });

  it('should display two buttons', () => {
    const wrapper = shallow(<Pomodorolist />);
    expect(wrapper.find('Button')).to.be.of.length(2);
  });

  it('should add a clock when add button is pressed', () => {
    const wrapper = mount(<Pomodorolist />);
    const button = wrapper.findWhere(n=>n.prop('icon') == 'plus');

    expect(wrapper.find('Pomodoro')).to.have.length(1);
    button.simulate('click');
    expect(wrapper.find('Pomodoro')).to.have.length(2);
  });

  it('should remove a clock when remove button is pressed', () => {
    const wrapper = mount(<Pomodorolist />);
    const button = wrapper.findWhere(n=>n.prop('icon') == 'minus');

    expect(wrapper.find('Pomodoro')).to.have.length(1);
    button.simulate('click');
    expect(wrapper.find('Pomodoro')).to.have.length(0);
  });
});
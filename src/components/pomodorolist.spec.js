import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import Pomodorolist from './pomodorolist';

describe("<Pomodorolist />", () => {
  it('should contain at least one PomodoroClock', () => {
    const wrapper = mount(<Pomodorolist />);
    expect(wrapper.find('Pomodoro')).to.be.length(1);
  });

  it('should display two buttons', () => {
    const wrapper = shallow(<Pomodorolist />);
    expect(wrapper.find('Button')).to.be.of.length(1);
  });

  it('should add a clock when add button is pressed', () => {
    const wrapper = mount(<Pomodorolist />);
    const button = wrapper.findWhere(n=>n.prop('icon') == 'plus');

    expect(wrapper.find('Pomodoro')).to.have.length(1);
    button.simulate('click');
    expect(wrapper.find('Pomodoro')).to.have.length(2);
  });

  it('should remove a clock when remove button is pressed', () => {
    const wrapper = mount(<Pomodorolist />).setState({numOfClocks: 2});
    const button = wrapper.findWhere(n=>n.prop('icon') == 'minus');

    expect(wrapper.find('Pomodoro')).to.have.length(1);
    button.simulate('click');
    expect(wrapper.find('Pomodoro')).to.have.length(0);
  });
});
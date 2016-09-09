import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Pomodorolist from './pomodorolist';

describe("<Pomodorolist />", () => {
  it('should contain at least one PomodoroClock', () => {
    const wrapper = shallow(<Pomodorolist />);
    expect(wrapper.contain(<Pomodoro />)).to.be.equal(true);
  });

  it('should display an add button with class add', () => {
    const wrapper = shallow(<Pomodorolist />);
    expect(wrapper.contains(<button className="add" />)).to.be.true;
  });

  it('should display a remove button with class remove', () => {
    const wrapper = shallow(<Pomodorolist />);
    expect(wrapper.contains(<button className="remove" />)).to.be.true;
  });

  it('should add a clock when add button is pressed', () => {
    const wrapper = shallow(<Pomodorolist />);
    const button = wrapper.find('.add');

    expect(wrapper.find(<Pomodoro />)).to.have.length(1);
    button.simulate('click');
    expect(wrapper.find(<Pomodoro />)).to.have.length(2);
  });

  it('should remove a clock when remove button is pressed', () => {
    const wrapper = shallow(<Pomodorolist />);
    const button = wrapper.find('.remove');

    expect(wrapper.find(<Pomodoro />)).to.have.length(1);
    button.simulate('click');
    expect(wrapper.find(<Pomodoro />)).to.have.length(0);
  });
});
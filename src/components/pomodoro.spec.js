import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Pomodoro from './pomodoro';

describe("<Pomodoro />", () => {
  it("should display two inputs", () => {
    const wrapper = shallow(<Pomodoro />);
    expect(wrapper.find(<input />)).to.have.length(2);
  });

  it("should display four buttons", () => {
    const wrapper = shallow(<Pomodoro />);
    expect(wrapper.find(<button />)).to.have.length(4);
  });

  it("should display the time left", () => {
    const wrapper = shallow(<Pomodoro />);
    expect(wrapper.find('.timeleft')).to.have.length(1);
  });

  it('should decrease time when minus button is pressed for break length and session length', () => {
    const wrapper = shallow(<Pomodoro />);
    const buttons = wrapper.findWhere(n => n.type() == 'button' && n.text() == '-');
    const inputs = wrapper.find(<input />);
    var before = [];
    var after = [];
    inputs.forEach((input) => {
      before.push(parseInt(input.text()));
    });
    buttons.forEach((button) => {
      button.simulate('click');
    });
    expect(before[0]).to.be.greaterThan(after[0]);
    expect(before[1]).to.be.greaterThan(after[1]);
  });

  it('should increase the time when button is pressed for the break length and session length', () => {
    const wrapper = shallow(<Pomodoro />);
    const buttons = wrapper.findWhere(n => n.type() == 'button' && n.text() == '+');
    const inputs = wrapper.find(<input />);
    var before = [];
    var after = [];
    inputs.forEach((input) => {
      before.push(parseInt(input.text()));
    });
    buttons.forEach((button) => {
      button.simulate('click');
    });
    expect(before[0]).to.be.lessThan(after[0]);
    expect(before[1]).to.be.lessThan(after[1]);
  });
});
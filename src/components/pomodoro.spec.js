import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import Pomodoro from './pomodoro';
import Button from './button';

describe("<Pomodoro />", () => {
  it("should display two inputs", () => {
    const wrapper = shallow(<Pomodoro />);
    expect(wrapper.find('input')).to.have.length(2);
  });

  it("should display four buttons", () => {
    const wrapper = shallow(<Pomodoro />);
    expect(wrapper.find('Button')).to.have.length(5);
  });

  it("should display the time left", () => {
    const wrapper = shallow(<Pomodoro />);
    expect(wrapper.find('.time-left').text()).to.have.length.greaterThan(0);
  });

  it('should decrease both break and session length time when minus button is clicked', () => {
    const wrapper = mount(<Pomodoro />);
    const buttons = wrapper.findWhere(n => n.type() == Button && n.prop('icon') == 'menu-left');
    const inputs = wrapper.find('input');
    var before = [];
    var after = [];
    inputs.forEach((input) => {
      before.push(input.prop('value'));
    });
    buttons.forEach((button) => {
      button.simulate('click');
    });
    inputs.forEach((input) => {
      after.push(input.prop('value'));
    });
    expect(before[0]).to.be.greaterThan(after[0]);
    expect(before[1]).to.be.greaterThan(after[1]);
  });

  it('should increase both break and session length time when plus button is clicked', () => {
    const wrapper = mount(<Pomodoro />);
    const buttons = wrapper.findWhere(n => n.type() == Button && n.prop('icon') == 'menu-left');
    const inputs = wrapper.find('input');
    var before = [];
    var after = [];
    inputs.forEach((input) => {
      before.push(input.prop('value'));
    });
    buttons.forEach((button) => {
      button.simulate('click');
    });
    inputs.forEach((input) => {
      after.push(input.prop('value'));
    });
    expect(before[0]).to.be.greaterThan(after[0]);
    expect(before[1]).to.be.greaterThan(after[1]);
  });
});
import React, {Component} from 'react';
import Button from './button';

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = { breakTime: 5, sessionTime: 25, timeLeft:25 };
    this.decreaseTime = this.decreaseTime.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
  }
  decreaseTime(prop) {
    let propVal = this.state[prop] - 1;
    this.setState({ [prop]: propVal });
  }
  increaseTime(prop) {
    let propVal = this.state[prop] + 1;
    this.setState({ [prop]: propVal });
  }
  render() {
    return (
      <div>
        <Button icon="menu-left" onClick={() => this.decreaseTime('breakTime') } />
        <input type="number" value={this.state.breakTime} />
        <Button icon="menu-right" onClick={() => this.increaseTime('breakTime') } />

        <h3 className="time-left">{this.state.timeLeft}</h3>
        
        <Button icon="menu-left" onClick={() => this.decreaseTime('sessionTime') } />
        <input type="number" value={this.state.sessionTime} />
        <Button icon="menu-right" onClick={() => this.increaseTime('sessionTime') } />
      </div>
    );
  }
}

export default Pomodoro;
import React, {Component} from 'react';
import Button from './button';

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = { breakTime: 5, sessionTime: 25, timeLeft: 25 };
    this.decreaseTime = this.decreaseTime.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
    this.handlebreakTime = this.handlebreakTime.bind(this);
    this.handleSessionTime = this.handleSessionTime.bind(this);
  }
  decreaseTime(prop) {
    let propVal = this.state[prop] - 1;
    if (prop == 'sessionTime') {
      this.setState({ sessionTime: propVal, timeLeft: propVal });
    } else {
      this.setState({ [prop]: propVal });
    }
  }
  increaseTime(prop) {
    let propVal = this.state[prop] + 1;
    if (prop == 'sessionTime') {
      this.setState({ sessionTime: propVal, timeLeft: propVal });
    } else {
      this.setState({ [prop]: propVal });
    }
  }
  handlebreakTime(event) {
    let num = parseInt(event.target.value);
    this.setState({ breakTime: num });
  }
  handleSessionTime(event) {
    let num = parseInt(event.target.value);
    this.setState({ sessionTime: num, timeLeft: num });
  }
  render() {
    return (
      <div>
        <Button icon="menu-left" onClick={() => this.decreaseTime('breakTime') } />
        <input type="number" value={this.state.breakTime} onChange={this.handlebreakTime}/>
        <Button icon="menu-right" onClick={() => this.increaseTime('breakTime') } />

        <h3 className="time-left">{this.state.timeLeft}</h3>

        <Button icon="menu-left" onClick={() => this.decreaseTime('sessionTime') } />
        <input type="number" value={this.state.sessionTime} onChange={this.handleSessionTime}/>
        <Button icon="menu-right" onClick={() => this.increaseTime('sessionTime') } />
      </div>
    );
  }
}

export default Pomodoro;
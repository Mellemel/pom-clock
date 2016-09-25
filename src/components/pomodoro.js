import React, {Component} from 'react';
import Button from './button';
import Timer from './timer'

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = { breakTime: 5, sessionTime: 25 };
    this.setTime = this.setTime.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  setTime(prop, val) {
    // Prevent user from going below zero
    let propVal = val < 0 ? 0 : val;
    if (prop == 'sessionTime') {
      this.setState({ sessionTime: propVal});
    } else {
      this.setState({ 'breakTime': propVal });
    }
  }

  changeTime(prop, val) {
    let newVal = this.state[prop] + val;
    this.setTime(prop, newVal);
  }

  handleInput(event) {
    let value = event.target.value;
    let id = event.target.id;
    // value from event comes back as a string
    var num = !value ? 0 : parseInt(value);
    this.setTime(id, num);
  }

  startTimer(){
    this.timer = setInterval()
  }

  render() {
    return (
      <div>
        <Button icon="menu-left" disabled={this.props.start} onClick={() => this.changeTime('breakTime', -1) } />
        <input id="breakTime" type="number" value={this.state.breakTime} onChange={this.handleInput}/>
        <Button icon="menu-right" disabled={this.props.start} onClick={() => this.changeTime('breakTime', 1) } />

        <Timer time={this.state.sessionTime} />

        <Button icon="menu-left" disabled={this.props.start} onClick={() => this.changeTime('sessionTime', -1) } />
        <input id="sessionTime" type="number" value={this.state.sessionTime} onChange={this.handleInput}/>
        <Button icon="menu-right" disabled={this.props.start} onClick={() => this.changeTime('sessionTime', 1) } />

        <Button icon="minus" disabled={this.props.start} onClick={()=>this.props.removeClock(this.props.id)} />
      </div>
    );
  }
}

Pomodoro.propTypes = {
  id: React.PropTypes.number,
  removeClock: React.PropTypes.func,
  start: React.PropTypes.bool
};

export default Pomodoro;
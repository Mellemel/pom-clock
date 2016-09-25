import React, {Component} from 'react';
import Button from './button';

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = { breakTime: 5, sessionTime: 25, timeLeft: 25 * 60, removeMe: 2 };
    this.setTime = this.setTime.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.start) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  setTime(prop, val) {
    // Prevent user from going below zero
    let propVal = val < 0 ? 0 : val;
    if (prop == 'sessionTime') {
      this.setState({ sessionTime: propVal, timeLeft: propVal * 60 });
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

  startTimer() {
    let decreaseTime = () => {
      // timeleft will switch to breakTime after the next callback in setinterval
      if (!this.state.timeLeft) {
        this.state.removeMe--;
        if (!this.state.removeMe) {
          this.stopTimer();
          this.props.removeClock(this.props.id);
        } else {
          let breakTime = this.state.breakTime * 60;
          this.setState({ timeLeft: breakTime });
        }
      } else {
        let timeLeft = this.state.timeLeft - 1;
        this.setState({ timeLeft: timeLeft });
      }
    };

    this.timer = setInterval(decreaseTime, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  convertTime(time) {
    let minutes = ~~(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  }

  render() {
    return (
      <div className="row vcenter pomodoro">
        <div className="col-xs-5 col-sm-4">
          <div className="input-group">
            <Button icon="menu-left" disabled={this.props.disabled} onClick={() => this.changeTime('breakTime', -1) } />
            <input id="breakTime" className="form-control text-center" type="number" value={this.state.breakTime} onChange={this.handleInput}/>
            <Button icon="menu-right" disabled={this.props.disabled} onClick={() => this.changeTime('breakTime', 1) } />
          </div>
        </div>

        <div className="col-xs-2 col-sm-4 time-left vcenter">
          <h3 className="time-left">{this.convertTime(this.state.timeLeft) }</h3>
        </div>

        <div className="col-xs-5 col-sm-4">
          <div className="input-group">
            <Button icon="menu-left" disabled={this.props.disabled} onClick={() => this.changeTime('sessionTime', -1) } />
            <input id="sessionTime" className="form-control text-center" type="number" value={this.state.sessionTime} onChange={this.handleInput}/>
            <Button icon="menu-right" disabled={this.props.disabled} onClick={() => this.changeTime('sessionTime', 1) } />
          </div>
        </div>
      </div>
    );
  }
}

Pomodoro.propTypes = {
  id: React.PropTypes.number,
  removeClock: React.PropTypes.func,
  disabled: React.PropTypes.bool
};

export default Pomodoro;
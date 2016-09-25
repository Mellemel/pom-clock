import React, {Component} from 'react';
import Pomodoro from './pomodoro';
import Button from './button';

class Pomodorolist extends Component {
  constructor() {
    super();
    this.state = ({ clocks: [], totalClocks: 0 });
    this.removeClock = this.removeClock.bind(this);
    this.addClock = this.addClock.bind(this);
  }

  componentDidMount() {
    this.addClock();
  }

  removeClock() {
    this.state.clocks.pop();
    let lessClocks = this.state.clocks;
    this.setState({ clocks: lessClocks });
  }

  addClock() {
    let clock = {
      id: this.state.totalClocks++,
      start: false,
      disabled: false,
      removeClock: this.removeClock
    };
    this.state.clocks.push(clock);
    let moreClocks = this.state.clocks.slice();
    this.setState({ clocks: moreClocks });
  }

  render() {
    let clocks = this.state.clocks.map((clock, index) => {
      clock.disabled = this.props.start;
      if (index == 0) {
        clock.start = this.props.start;
        return <Pomodoro key={clock.id} {...clock}/>;
      }
      return <Pomodoro key={clock.id} {...clock}/>;
    });

    return (
      <div className="row text-center">
        {clocks}
        <div className="minus-add">
          <Button disabled={this.props.start} icon="minus" onClick={this.removeClock} />
          <Button disabled={this.props.start} icon="plus" onClick={this.addClock} />
        </div>
      </div>
    );
  }
}

export default Pomodorolist;
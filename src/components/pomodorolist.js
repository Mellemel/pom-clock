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

  removeClock(id) {
    let lessClocks = this.state.clocks.filter(n => n.id != id);
    console.log(lessClocks);
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
    console.log(moreClocks);
    this.setState({ clocks: moreClocks });
  }

  render() {
    let clocks = this.state.clocks.map((clock, index) => {
      clock.disabled = this.props.start
      if (index == 0) {
        clock.start = this.props.start;
        return <Pomodoro key={clock.id} {...clock}/>;
      }
      return <Pomodoro key={clock.id} {...clock}/>;
    });

    return (
      <div className="row text-center">
        <div className="col-sm-12">
          {clocks}
        </div>
        <Button disabled={this.props.start} icon="plus" onClick={this.addClock} />
      </div>
    );
  }
}

export default Pomodorolist;
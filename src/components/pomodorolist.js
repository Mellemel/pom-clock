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

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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
      removeClock: this.removeClock
    };
    let moreClocks = this.state.clocks.push(clock);
    console.log(this.state.clocks);
    this.setState({ numOfClocks: moreClocks });
  }

  render() {
    let clocks = this.state.clocks.map((clock) =>
      <Pomodoro key={clock.id} {...clock}/>);

    return (
      <div className="row text-center">
        <div className="col-sm-12">
          {clocks}
        </div>
        <Button icon="plus" onClick={this.addClock} />
      </div>
    );
  }
}

export default Pomodorolist;
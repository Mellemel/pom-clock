import React, {Component} from 'react';
import Pomodoro from './pomodoro';
import Button from './button';

class Pomodorolist extends Component {
  constructor() {
    super();
    this.state = ({ numOfClocks: 1 });
    this.removeClock = this.removeClock.bind(this);
    this.addClock = this.addClock.bind(this);
  }
  removeClock() {
    let lessClocks = --this.state.numOfClocks;
    this.setState({ numOfClocks: lessClocks });
  }
  addClock() {
    let moreClocks = ++this.state.numOfClocks;
    console.log(moreClocks);
    this.setState({ numOfClocks: moreClocks });
  }
  render() {

    return (
      <div className="row text-center">
        <div className="col-sm-12">
          {[...Array(this.state.numOfClocks)].map((x, i) =>
            <Pomodoro key={'' + i} />
          ) }
          <Button icon="minus" onClick={this.removeClock} />
        </div>
        <Button icon="plus" onClick={this.addClock} />
      </div>
    );
  }
}

export default Pomodorolist;
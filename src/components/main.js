import React, {Component} from 'react';
import Pomodorolist from './pomodorolist';
import Header from './header';

class Main extends Component {
  constructor() {
    super();
    this.state = { start: false };
    this.switchState = this.switchState.bind(this);
  }
  switchState() {
    this.setState({ start: !this.state.start });
  }
  render() {
    return (
      <div className="container">
        <Header>
          <button className="btn btn-default" onClick={this.switchState}>
            {this.state.start ? "Stop" : "Start"}
          </button>
        </Header>
        <Pomodorolist start={this.state.start} />
      </div>
    );
  }
}

export default Main;
import React, {Component} from 'react';
import Pomodorolist from './pomodorolist';
import Header from './header';

class Main extends Component {
  constructor() {
    super();
    this.state = {start:false};
    this.switchState = this.switchState.bind(this);
  }
  switchState() {
    this.setState({start: !this.state.start});
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Pom Clock</h1>
        <Header start={this.state.start} switchState={this.switchState} />
        <Pomodorolist start={this.state.start} />
      </div>
    );
  }
}

export default Main;
import React, {Component} from 'react';
import Pomodorolist from './pomodorolist';

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
        <div className="row text-center" >
          <div className="col-sm-6 col-sm-offset-3">
            <div className="row" id="header">
              <h1>Pom-Clock</h1>
            </div>
            <div className="row vcenter">
              <div className="col-xs-5 col-sm-4">
                <h3>Break Length</h3>
                <img className="img-responsive tomato" src={require('../images/tomato.svg')} />
              </div>
              <div className="col-xs-2 col-sm-4 time-left">
                <button className="btn btn-default start" onClick={this.switchState}>
                  {this.state.start ? "Stop" : "Start"}
                </button>
              </div>
              <div className="col-xs-5 col-sm-4">
                <h3>Session Length</h3>
                <img className="img-responsive tomato" src={require('../images/tomato.svg')} />
              </div>
            </div>
            <Pomodorolist start={this.state.start} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
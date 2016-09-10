import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div className="row text-center" id="header">
        <div className="col-sm-2 col-sm-offset-3">
          <h3>Break<br/>Length</h3>
        </div>
        <div className="col-sm-2 col">
          <button className="btn btn-default" onClick={this.props.switchState}>
            {this.props.start ? "Stop" : "Start"}
          </button>
        </div>
        <div className="col-sm-2 col">
          <h3>Session<br/>Length</h3>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  start: React.PropTypes.func,
  switchState: React.PropTypes.bool
};

export default Header;
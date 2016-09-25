import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div className="row text-center" id="header">
        <h1>Pom Clock</h1>
        <div className="row center-items">
          <div className="col-xs-4 col-sm-2 col-sm-offset-3">
            <h3 className="float-right">Break<br/>Length</h3>
          </div>
          <div className="col-xs-4 col-sm-2 col">
            {this.props.children}
          </div>
          <div className="col-xs-4 col-sm-2 col">
            <h3 className="float-left">Session<br/>Length</h3>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Header;
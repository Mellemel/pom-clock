import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div className="row text-center" id="header">
        <h1 className="text-center">Pom Clock</h1>
        <div className="row">
          <div className="col-sm-2 col-sm-offset-3">
            <h3>Break<br/>Length</h3>
          </div>
          <div className="col-sm-2 col">
            {this.props.children}
          </div>
          <div className="col-sm-2 col">
            <h3>Session<br/>Length</h3>
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
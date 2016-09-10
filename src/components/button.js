import React, {PropTypes} from 'react';

const Button = props => {
  var icon = "glyphicon glyphicon-" + props.icon;
  return (
    <button className="btn btn-default" onClick={props.onClick}>
      <span className={icon} />
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

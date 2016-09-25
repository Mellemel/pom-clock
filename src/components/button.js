import React, {PropTypes} from 'react';

const Button = props => {
  var icon = "glyphicon glyphicon-" + props.icon;
  return (
    <span className="input-group-btn">
      <button type="button" disabled={props.disabled} className="btn btn-default" onClick={props.onClick}>
        <span className={icon} />
      </button>
    </span>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

import "./styles/progress-bar.css"

const ProgressBar = function (props) {
  const { location, pointerDes } = props;
  const style = { width: `${location * 20}%` };
  const pointerStyle = { gridColumn: `${location + 1} / span 3` };
  return (
    <div className="progress_bar">
      <div className="meter">
        <span style={style} />
      </div>
      <div className="pointer" style={pointerStyle} />
      <p className="pointer_description" style={pointerStyle}>{pointerDes}</p>
    </div>
  );
};

ProgressBar.propTypes = {
  location: PropTypes.number.isRequired,
  pointerDes: PropTypes.string.isRequired,
};

export default ProgressBar;

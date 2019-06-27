import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

import "./styles/buttons.css"

const Buttons = function (props) {
  const { nextPage, prevPage } = props;

  if (prevPage === null) {
    return (
      <div className="buttons">
        <Link to={`/${nextPage}`} className="button-link">Begin</Link>
      </div>
    );
  }

  return (
    <div className="buttons">
      <Link to={`/${nextPage}`} className="button-link">Next</Link>
      <Link to={`/${prevPage}`} className="button-link">Back</Link>
    </div>
  );
};

Buttons.propTypes = {
  nextPage: PropTypes.string.isRequired,
  prevPage: PropTypes.string
};

Buttons.defaultProps = {
  prevPage: null,
}

export default Buttons;

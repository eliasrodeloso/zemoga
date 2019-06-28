import React from 'react';
import PropTypes from 'prop-types';
import './Closing.scss';

const Closing = ({ daysLeft }) => (
  <div className="Closing">
    <div className="Closing-bar">
      <div
        className="Closing-progress"
        style={{ width: `${((30 - daysLeft) * 100) / 30}%` }}
      >
        <span className="Closing-progress-text">Closing in</span>
      </div>
      <div className="Closing-progress-left">
        <span className="Closing-progress-text--left">
          <span className="Closing-progress-text--number">{daysLeft}</span>
          {' '}
days
        </span>
      </div>
    </div>
  </div>
);

Closing.propTypes = {
  daysLeft: PropTypes.number
};

Closing.defaultProps = {
  daysLeft: 22
};

export default Closing;

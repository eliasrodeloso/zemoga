import React from 'react';
import PropTypes from 'prop-types';
import './Closing.scss';

const Closing = ({ actualRulerDuration }) => (
  <div className="Closing">
    <div className="Closing-bar">
      <div
        className="Closing-progress"
        style={{
          width: `${((30 - actualRulerDuration.daysLeft) * 100) / 30}%`
        }}
      >
        <span className="Closing-progress-text">Closing in</span>
      </div>
      <div className="Closing-progress-left">
        <span className="Closing-progress-text--left">
          <span className="Closing-progress-text--number">
            {actualRulerDuration.daysLeft}
          </span>
          {' '}
          days
        </span>
      </div>
    </div>
  </div>
);

Closing.propTypes = {
  actualRulerDuration: PropTypes.shape({
    maximumDays: PropTypes.number,
    daysLeft: PropTypes.number
  })
};

Closing.defaultProps = {
  actualRulerDuration: {
    maximumDays: 30,
    daysLeft: 22
  }
};

export default Closing;

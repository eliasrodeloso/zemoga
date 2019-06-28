import React from 'react';
import './Closing.scss';

const Closing = () => (
  <div className="Closing">
    <div className="Closing-bar">
      <div className="Closing-progress">
        <span className="Closing-progress-text">Closing in</span>
      </div>
      <div className="Closing-progress-left">
        <span className="Closing-progress-text--left">
          <span className="Closing-progress-text--number">22</span>
          {' '}
days
        </span>
      </div>
    </div>
  </div>
);

export default Closing;

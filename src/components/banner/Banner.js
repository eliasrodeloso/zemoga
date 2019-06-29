import React from 'react';
import './Banner.scss';

const Banner = () => (
  <div className="Banner columns">
    <div className="Banner-copy column">
      <h1>Is there anyone else you would want us to add?</h1>
    </div>
    <div className="Banner-cta column is-one-quarter">
      <button className="Banner-button" type="button">
        Submit a Name
      </button>
    </div>
  </div>
);

export default Banner;

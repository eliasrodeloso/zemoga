import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import './HeroSlider.scss';

const HeroSlider = ({ slides }) => (
  <div className="HeroSlider">
    <Slider>
      {slides.map(slide => (
        <div className="HeroSlider-slide" key={slide.title}>
          <div
            style={{ backgroundImage: `url(${slide.image})` }}
            className="HeroSlider-content columns is-gapless"
          >
            {slide.content}
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

HeroSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HeroSlider;

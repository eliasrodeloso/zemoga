import React from 'react';
import { mount } from 'enzyme';
import HeroSlider from './HeroSlider';

it('should render without crashing', () => {
  const wrapper = mount(<HeroSlider slides={[]} />);
  expect(wrapper.find('div.HeroSlider').length).toBe(1);
  expect(wrapper).toBeDefined();
});

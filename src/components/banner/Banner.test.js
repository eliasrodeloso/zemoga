import React from 'react';
import { mount } from 'enzyme';
import Banner from './Banner';

it('should render without crashing', () => {
  const wrapper = mount(<Banner />);
  expect(wrapper.find('div.Banner.columns').length).toBe(1);
  expect(wrapper).toBeDefined();
});

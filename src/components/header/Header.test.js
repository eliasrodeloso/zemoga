import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

it('should render without crashing', () => {
  const wrapper = mount(<Header />);
  expect(wrapper.find('div.Header-wrapper').length).toBe(1);
  expect(wrapper).toBeDefined();
});

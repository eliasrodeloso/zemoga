import React from 'react';
import { mount } from 'enzyme';
import Loading from './Loading';

it('should render without crashing', () => {
  const wrapper = mount(<Loading />);
  expect(wrapper.find('div.Loading').length).toBe(1);
  expect(wrapper).toBeDefined();
});

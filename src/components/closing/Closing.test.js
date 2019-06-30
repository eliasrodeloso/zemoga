import React from 'react';
import { mount } from 'enzyme';
import Closing from './Closing';

it('should render without crashing', () => {
  const wrapper = mount(<Closing />);
  expect(wrapper.find('div.Closing').length).toBe(1);
  expect(wrapper).toBeDefined();
});

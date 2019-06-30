import React from 'react';
import { mount } from 'enzyme';
import Message from './Message';

it('should render without crashing', () => {
  const wrapper = mount(<Message />);
  expect(wrapper.find('div.Message').length).toBe(1);
  expect(wrapper).toBeDefined();
});

import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

it('should render without crashing', () => {
  const wrapper = mount(<Footer />);
  expect(wrapper.find('footer.Footer.columns').length).toBe(1);
  expect(wrapper).toBeDefined();
});

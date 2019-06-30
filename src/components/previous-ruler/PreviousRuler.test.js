import React from 'react';
import { mount } from 'enzyme';
import PreviousRuler from './PreviousRuler';
import initialData from '../../config/initialContent.json';

it('should render without crashing', () => {
  const wrapper = mount(
    <PreviousRuler ruler={initialData.previousRulers[0]} />
  );
  expect(wrapper.find('div.PreviousRuler').length).toBe(1);
  expect(wrapper).toBeDefined();
});

import React from 'react';
import { mount } from 'enzyme';
import VotingCard from './VotingCard';

const initalProps = {
  title: '',
  description: '',
  informationLink: '',
  store: {},
  actions: { voteUp: jest.fn, voteDown: jest.fn }
};

it('should render without crashing', () => {
  const wrapper = mount(<VotingCard {...initalProps} />);
  expect(wrapper.find('div.VotingCard').length).toBe(1);
  expect(wrapper).toBeDefined();
});

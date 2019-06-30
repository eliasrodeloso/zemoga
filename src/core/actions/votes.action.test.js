import configureStore from 'redux-mock-store';
import VotesActions, { VOTES_DOWN, VOTES_UP } from './votes.action';
import { initialState as votesInitialState } from '../reducers/votes.reducer';

const mockStore = configureStore([]);

describe('Votes actions', () => {
  it('does vote up', () => {
    const expectedActions = [{ type: VOTES_UP, payload: 'dummyRuler' }];
    const store = mockStore(votesInitialState);
    store.dispatch(VotesActions.votesUp('dummyRuler'));
    const currentActions = store.getActions();
    expect(currentActions[0].type).toBe(expectedActions[0].type);
    expect(currentActions[0].payload).toBe(expectedActions[0].payload);
  });

  it('does vote down', () => {
    const expectedActions = [{ type: VOTES_DOWN, payload: 'dummyRuler' }];
    const store = mockStore(votesInitialState);
    store.dispatch(VotesActions.votesDown('dummyRuler'));
    const currentActions = store.getActions();
    expect(currentActions[0].type).toBe(expectedActions[0].type);
    expect(currentActions[0].payload).toBe(expectedActions[0].payload);
  });
});

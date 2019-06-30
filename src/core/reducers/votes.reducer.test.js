import votesReducer, { initialState } from './votes.reducer';
import { VOTES_DOWN, VOTES_UP } from '../actions/votes.action';

describe('Votes reducer', () => {
  it('should return the inital state', () => {
    expect(votesReducer(undefined, {})).toBe(initialState);
  });

  it(`shoudl handle ${VOTES_DOWN}`, () => {
    expect(
      votesReducer(initialState, { type: VOTES_DOWN, payload: 'dummy' })
    ).toStrictEqual({
      voters: 1,
      votedRulers: [{ rulerName: 'dummy', votesUp: 0, votesDown: 1 }]
    });
  });

  it(`should handle ${VOTES_UP}`, () => {
    expect(
      votesReducer(initialState, { type: VOTES_UP, payload: 'dummy' })
    ).toStrictEqual({
      voters: 1,
      votedRulers: [{ rulerName: 'dummy', votesUp: 1, votesDown: 0 }]
    });
  });
});

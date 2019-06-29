export const VOTES_UP = 'VOTES_UP';
export const VOTES_DOWN = 'VOTES_DOWN';

export default class VotesActions {
  static votesUp(rulerName) {
    return { type: VOTES_UP, payload: rulerName };
  }

  static votesDown(rulerName) {
    return { type: VOTES_DOWN, payload: rulerName };
  }
}

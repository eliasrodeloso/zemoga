import { VOTES_DOWN, VOTES_UP } from '../actions/votes.action';

const initialState = {
  voters: 0,
  votedRulers: [{ rulerName: '', votesUp: 0, votesDown: 0 }]
};

const votesReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOTES_UP:
      return {
        voters: state.voters + 1,
        votedRulers: state.votedRulers.map((ruler) => {
          if (!ruler.rulerName) {
            return {
              rulerName: action.payload,
              votesUp: 1,
              votesDown: 0
            };
          }
          if (ruler.rulerName === action.payload) {
            return {
              rulerName: ruler.rulerName,
              votesUp: ruler.votesUp + 1,
              votesDown: ruler.votesDown
            };
          }
          return ruler;
        })
      };

    case VOTES_DOWN:
      return {
        voters: state.voters + 1,
        votedRulers: state.votedRulers.map((ruler) => {
          if (!ruler.rulerName) {
            return {
              rulerName: action.payload,
              votesDown: 1,
              votesUp: 0
            };
          }
          if (ruler.rulerName === action.payload) {
            return {
              rulerName: ruler.rulerName,
              votesDown: ruler.votesDown + 1,
              votesUp: ruler.votesUp
            };
          }
          return ruler;
        })
      };

    default:
      return state;
  }
};

export default votesReducer;

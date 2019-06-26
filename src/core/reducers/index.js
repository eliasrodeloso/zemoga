import { combineReducers } from 'redux';
import votesReducer from './votes.reducer';

const rootReducer = combineReducers({
  votesStore: votesReducer
});

export default rootReducer;

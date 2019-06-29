import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VotesActions from '../../core/actions/votes.action';
import VotingCard from '../../components/voting-card/VotingCard';

const mapStateToProps = state => ({
  store: {
    ...state.votesStore
  }
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { voteUp: VotesActions.votesUp, voteDown: VotesActions.votesDown },
    dispatch
  )
});

const mapOwnProps = (stateProps, dispatchProps, ownProps) => ({
  ...dispatchProps,
  ...ownProps,
  store: {
    ...stateProps.store.votedRulers.filter(
      votedRuler => votedRuler.rulerName === ownProps.title
    )[0]
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mapOwnProps
)(VotingCard);

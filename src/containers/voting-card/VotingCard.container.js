import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VotesActions from '../../core/actions/votes.action';
import VotingCard from '../../components/voting-card/VotingCard';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { voteUp: VotesActions.votesUp, voteDown: VotesActions.votesDown },
    dispatch
  )
});

const mapOwnProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(
  null,
  mapDispatchToProps,
  mapOwnProps
)(VotingCard);

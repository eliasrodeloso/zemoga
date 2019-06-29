import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ThumnsUpIcon } from '../../assets/icons/thumbs-up.svg';
import { ReactComponent as ThumnsDownIcon } from '../../assets/icons/thumbs-down.svg';
import { ReactComponent as WikiIcon } from '../../assets/icons/wiki.svg';
import './VotingCard.scss';

const VotingCard = ({
  title, description, informationLink, actions
}) => (
  <div className="VotingCard">
    <div className="VotingCard-crop" />
    <div className="VotingCard-wrapper">
      <header className="VotingCard-header">
        <h4>What&apos;s your opinion on</h4>
        <h1>{title}</h1>
      </header>
      <section className="VotingCard-content">
        <p>{description}</p>
        <div className="VotingCard-more">
          <WikiIcon />
          <a href={informationLink}>More information</a>
        </div>
        <h2>What&apos;s your veredict?</h2>
      </section>
      <footer className="VotingCard-footer">
        <button
          type="button"
          className="VotingCard-choice VotingCard-choice--up"
          onClick={() => actions.voteUp(title)}
        >
          <ThumnsUpIcon />
        </button>
        <button
          type="button"
          className="VotingCard-choice VotingCard-choice--down"
          onClick={() => actions.voteDown(title)}
        >
          <ThumnsDownIcon />
        </button>
      </footer>
    </div>
  </div>
);

VotingCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  informationLink: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default VotingCard;

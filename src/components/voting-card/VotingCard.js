import React from 'react';
import { ReactComponent as ThumnsUpIcon } from '../../assets/icons/thumbs-up.svg';
import { ReactComponent as ThumnsDownIcon } from '../../assets/icons/thumbs-down.svg';
import { ReactComponent as WikiIcon } from '../../assets/icons/wiki.svg';
import './VotingCard.scss';

const VotingCard = () => (
  <div className="VotingCard">
    <div className="VotingCard-crop" />
    <div className="VotingCard-wrapper">
      <header className="VotingCard-header">
        <h4>What&apos;s your opinion on</h4>
        <h1>Pope Francis?</h1>
      </header>
      <section className="VotingCard-content">
        <p>
          He&apos;s talking tough on clergy sexual abuse, but is he just another
          papal pervert protector? (thumbs down) or a true pedophile punishing
          pontiff (thumbs up)
        </p>
        <div className="VotingCard-more">
          <WikiIcon />
          <a href="http://wikipedia.org">More information</a>
        </div>
        <h2>What&apos;s your veredict?</h2>
      </section>
      <footer className="VotingCard-footer">
        <button
          type="button"
          className="VotingCard-choice VotingCard-choice--up"
        >
          <ThumnsUpIcon />
        </button>
        <button
          type="button"
          className="VotingCard-choice VotingCard-choice--down"
        >
          <ThumnsDownIcon />
        </button>
      </footer>
    </div>
  </div>
);

export default VotingCard;

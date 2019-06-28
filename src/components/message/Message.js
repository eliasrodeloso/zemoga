import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './Message.scss';

const Message = () => (
  <div className="Message">
    <div className="columns">
      <div className="column is-one-quarter Message-title">
        <h4>Speak Out. Be Heard.</h4>
        <h1>Be counted</h1>
      </div>
      <div className="column Message-text">
        <p>
          Rule of Thumb is a crowd source court of public opinion where anyone
          and everyone can speak out and speak freely. It&apos;s easy: You share
          your opinion, we analyze and put the data in a public report
        </p>
        <span className="Message-close">
          <CloseIcon />
        </span>
      </div>
    </div>
  </div>
);

export default Message;

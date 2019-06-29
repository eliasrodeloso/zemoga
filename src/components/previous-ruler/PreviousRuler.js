import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from '../../config/moment';
import { ReactComponent as ThumbsUpIcon } from '../../assets/icons/thumbs-up.svg';
import { ReactComponent as ThumbsDownIcon } from '../../assets/icons/thumbs-down.svg';
import './PreviousRuler.scss';

const PreviousRuler = ({ ruler }) => {
  const resultClassName = classnames('PreviousRuler-result', {
    'PreviousRuler-result--looser': ruler.result === 'looser',
    'PreviousRuler-result--winner': ruler.result === 'winner'
  });
  return (
    <div
      className="PreviousRuler"
      style={{ backgroundImage: `url(${ruler.picture})` }}
    >
      <div className="PreviousRuler-crop" />
      <div className={resultClassName}>
        {ruler.result === 'winner' ? (
          <ThumbsUpIcon className="PreviousRuler-icon" />
        ) : (
          <ThumbsDownIcon className="PreviousRuler-icon" />
        )}
      </div>
      <div className="PreviousRuler-info">
        <h1 className="PreviousRuler-name">{ruler.name}</h1>
        <p>{ruler.description}</p>
        <div className="PreviousRuler-meta">
          <button className="PreviousRuler-reportButton" type="button">
            View Full Report
          </button>
          <div className="PreviousRuler-meta-right">
            <div className="PreviousRuler-date">
              {moment(ruler.date, 'DD/MM/YYYY').fromNow()}
            </div>
            <div className="PreviousRuler-category">
              {`in ${
                ruler.category
              }`}
            </div>
          </div>
        </div>
      </div>
      <div className="PreviousRuler-statistics">
        <div
          className="PreviousRuler-statistic PreviousRuler-statistic--winner"
          style={{ width: `${ruler.statistics.supporters}%` }}
        >
          <ThumbsUpIcon className="PreviousRuler-icon" />
          <span className="statistic">{`${ruler.statistics.supporters}%`}</span>
        </div>
        <div
          className="PreviousRuler-statistic PreviousRuler-statistic--looser"
          style={{ width: `${ruler.statistics.detractors}%` }}
        >
          <span className="statistic">{`${ruler.statistics.detractors}%`}</span>
          <ThumbsDownIcon className="PreviousRuler-icon" />
        </div>
      </div>
    </div>
  );
};

PreviousRuler.propTypes = {
  ruler: PropTypes.shape({
    pic: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    result: PropTypes.oneOf(['winner', 'looser']),
    statistics: PropTypes.shape({
      supporters: PropTypes.number,
      detractors: PropTypes.number
    })
  }).isRequired
};

export default PreviousRuler;

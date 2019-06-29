import moment from 'moment';

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '1 few seconds',
    ss: '%d seconds',
    m: '1 minute',
    mm: '%d minutes',
    h: '1 hour',
    hh: '%d hours',
    d: '1 day',
    dd: '%d days',
    M: '1 month',
    MM: '%d months',
    y: '1 year',
    yy: '%d years'
  }
});

export default moment;

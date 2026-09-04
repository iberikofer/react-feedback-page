import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const OPTION_CONFIG = {
  good: {
    label: 'Good',
    emoji: '👍',
    className: css.buttonGood,
    ariaLabel: 'Rate as Good',
  },
  neutral: {
    label: 'Neutral',
    emoji: '👌',
    className: css.buttonNeutral,
    ariaLabel: 'Rate as Neutral',
  },
  bad: {
    label: 'Bad',
    emoji: '👎',
    className: css.buttonBad,
    ariaLabel: 'Rate as Bad',
  },
};

export const FeedbackOptions = ({ options, onLeaveFeedback, counts = {} }) => {
  return (
    <div className={css.container} role="group" aria-label="Feedback ratings">
      {options.map(option => {
        const config = OPTION_CONFIG[option] || {
          label: option,
          emoji: '✨',
          className: '',
          ariaLabel: `Rate as ${option}`,
        };
        const count = counts[option];

        return (
          <button
            key={option}
            type="button"
            className={`${css.button} ${config.className}`.trim()}
            onClick={() => onLeaveFeedback(option)}
            aria-label={config.ariaLabel}
          >
            <span className={css.icon} role="img" aria-hidden="true">
              {config.emoji}
            </span>
            <span>{config.label}</span>
            {typeof count === 'number' && count > 0 && (
              <span className={css.badge}>{count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  counts: PropTypes.objectOf(PropTypes.number),
};

export default FeedbackOptions;

import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const percentage = Math.round(positivePercentage) || 0;

  // Compute status tier
  let statusText = 'Low';
  let statusClass = css.statusLow;
  let fillColor = 'var(--color-bad)';

  if (percentage >= 70) {
    statusText = 'Excellent';
    statusClass = css.statusHigh;
    fillColor = 'var(--color-good)';
  } else if (percentage >= 40) {
    statusText = 'Average';
    statusClass = css.statusMedium;
    fillColor = 'var(--color-neutral)';
  }

  const metrics = [
    {
      id: 'good',
      label: 'Good',
      value: good,
      icon: '👍',
      className: css.cardGood,
    },
    {
      id: 'neutral',
      label: 'Neutral',
      value: neutral,
      icon: '👌',
      className: css.cardNeutral,
    },
    {
      id: 'bad',
      label: 'Bad',
      value: bad,
      icon: '👎',
      className: css.cardBad,
    },
    {
      id: 'total',
      label: 'Total',
      value: total,
      icon: '📈',
      className: css.cardTotal,
    },
  ];

  return (
    <div className={css.container}>
      {/* Satisfaction Gauge */}
      <div className={css.gaugeCard}>
        <div className={css.gaugeHeader}>
          <span className={css.gaugeTitle}>Positive Sentiment Score</span>
          <span className={`${css.statusChip} ${statusClass}`}>
            {statusText}
          </span>
        </div>

        <div className={css.gaugeValue}>
          <span>{percentage}%</span>
        </div>

        <div
          className={css.progressBarTrack}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Positive feedback percentage"
        >
          <div
            className={css.progressBarFill}
            style={{
              width: `${percentage}%`,
              backgroundColor: fillColor,
            }}
          />
        </div>
      </div>

      {/* KPI Cards */}
      <div className={css.grid}>
        {metrics.map(metric => (
          <div
            key={metric.id}
            className={`${css.card} ${metric.className}`.trim()}
          >
            <div className={css.cardHeader}>
              <span className={css.cardLabel}>{metric.label}</span>
              <span className={css.cardIcon} role="img" aria-hidden="true">
                {metric.icon}
              </span>
            </div>
            <span className={css.cardNumber}>{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

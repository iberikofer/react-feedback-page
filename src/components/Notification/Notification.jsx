import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({
  message = 'There is no feedback yet',
  title = 'No Feedback Given',
}) => {
  return (
    <div className={css.container} role="status" aria-live="polite">
      <span className={css.icon} role="img" aria-hidden="true">
        📊
      </span>
      <h3 className={css.title}>{title}</h3>
      <p className={css.message}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
};

export default Notification;

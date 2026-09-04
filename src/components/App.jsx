import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';

const FEEDBACK_OPTIONS = ['good', 'neutral', 'bad'];

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = option => {
    setFeedback(prev => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total > 0 ? (feedback.good / total) * 100 : 0;

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div className={css.brandBadge}>
          <span className={css.brandDot} aria-hidden="true" />
          <span>Real-time Sentiment System</span>
        </div>
        <h1 className={css.title}>Feedback Hub</h1>
        <p className={css.subtitle}>
          Collect real-time customer satisfaction ratings and track performance
          metrics seamlessly.
        </p>
      </header>

      <main className={css.main}>
        <Section title="Leave Your Feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={handleLeaveFeedback}
            counts={feedback}
          />
        </Section>

        <hr className={css.divider} />

        <Section title="Feedback Statistics">
          {total === 0 ? (
            <Notification
              title="No Feedback Collected"
              message="There is no feedback yet. Choose an option above to submit the first rating!"
            />
          ) : (
            <>
              <Statistics
                good={feedback.good}
                neutral={feedback.neutral}
                bad={feedback.bad}
                total={total}
                positivePercentage={positivePercentage}
              />
              <div className={css.resetWrapper}>
                <button
                  type="button"
                  className={css.resetButton}
                  onClick={handleReset}
                  aria-label="Reset all feedback statistics"
                >
                  <span role="img" aria-hidden="true">
                    ↺
                  </span>
                  <span>Reset Statistics</span>
                </button>
              </div>
            </>
          )}
        </Section>
      </main>

      <footer className={css.footer}>
        <p>© 2026 Feedback Hub. Built with React by Yaroslav Sych.</p>
        <div className={css.footerLinks}>
          <a
            href="https://github.com/iberikofer/react-feedback-page"
            target="_blank"
            rel="noopener noreferrer"
            className={css.footerLink}
          >
            GitHub Repository
          </a>
          <span>•</span>
          <a
            href="https://github.com/iberikofer/react-feedback-page/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className={css.footerLink}
          >
            MIT License
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;

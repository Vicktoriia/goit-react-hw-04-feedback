import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import './App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(prevState => prevState + 1);
  };
  const addNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const addBad = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((total, val) => total + val, 0);
  };

  const countPositiveFeedbackPercentage = () => {
       const total = countTotalFeedback();
    return Math.round((good * 100) / total) || 0;
  };

 const handleFeedback = e => {
    switch (e) {
      case 'good':
        addGood();
        break;
      case 'neutral':
        addNeutral();
        break;
      case 'bad':
        addBad();
        break;
      default:
        return;
    }
 };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 20,
            color: '#010101',
            padding: 20,
          }}
        >
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys({ good, neutral, bad })}
              onLeaveFeedback={handleFeedback}
            />
          </Section>
          <Section title="Statistics">
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              ></Statistics>
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </div>
      );
  }

export default App;

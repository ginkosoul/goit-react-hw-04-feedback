import { Component } from 'react';
import FeedbackBtn from 'components/FeedbackBtn/FeedbackBtn';
import Statistics from 'components/Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import css from '../App/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleButtonClick = event => {
    const { id } = event.target;
    this.setState(pv => ({ ...pv, [id]: pv[id] + 1 }));
  };
  countTotalFeedback = (...args) => {
    return args.reduce((acc, el) => acc + el, 0);
  };
  countPositiveFeedbackPercentage = (el, total) => {
    return el ? `${Math.round(100 * (el / total))} %` : '0 %';
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positive = this.countPositiveFeedbackPercentage(good, total);
    const keys = Object.keys(this.state);
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackBtn options={keys} handleClick={this.handleButtonClick} />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positevePart={positive}
            />
          </Section>
        )}
      </div>
    );
  }
}

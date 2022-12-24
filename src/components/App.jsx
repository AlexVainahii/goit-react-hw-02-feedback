import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Card } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Percents } from './Function';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  incrementClick = option => {
    this.setState(prewstate => ({ [option]: prewstate[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, num) => total + num, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Percents(this.state.good, this.countTotalFeedback());
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Card>
        <Section title="Please leave feedback">
          <FeedbackOptions
            objectState={this.state}
            incrementClick={this.incrementClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          )}
        </Section>
      </Card>
    );
  }
}

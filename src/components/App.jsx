import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Card } from './FeedbackOptions.styled';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <Card>
        <h2>Please leave feedback</h2>
        <FeedbackOptions />
        <h2> Statistics</h2>
        <Statistics good={} />
      </Card>
    );
  }
}

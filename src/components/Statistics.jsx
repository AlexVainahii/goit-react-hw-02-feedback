import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const {
      good,
      neutral,
      bad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this.props;
    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {countTotalFeedback()}</p>
        <p>Positive Feedback: {countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}

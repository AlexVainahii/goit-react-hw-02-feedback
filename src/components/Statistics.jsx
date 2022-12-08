import { Component } from 'react';

export class Statistics extends Component {
  render() {
    return (
      <>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}

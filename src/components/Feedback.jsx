import { Component } from 'react';
import { Percents, sumArrayValues } from './Function';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  incrementGood = () => {
    this.setState(state => ({ good: this.state.good + 1 }));
  };
  incrementNeutral = () => {
    this.setState(state => ({ neutral: this.state.neutral + 1 }));
  };
  incrementBad = () => {
    this.setState(state => ({ bad: this.state.bad + 1 }));
  };
  countTotalFeedback() {
    return sumArrayValues(this.state);
  }
  countPositiveFeedbackPercentage() {
    return Percents(this.state.good, this.countTotalFeedback());
  }
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.incrementGood}>Good</button>
          <button onClick={this.incrementNeutral}>Neutral</button>
          <button onClick={this.incrementBad}>Bad</button>
        </div>
        <h2> Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}
